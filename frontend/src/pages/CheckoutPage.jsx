import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Truck,
  Lock,
  MapPin,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import useCart from "../components/hooks/useCart";
import PAYMENT_API from "../config/api"

const CheckoutPage = () => {
  const API = PAYMENT_API.GATEWAY_API
  const navigate = useNavigate();
  const {clearCartFromDatabase} = useCart()
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const token = useSelector(
    (state) => state.auth.token
  );

  const [loading, setLoading] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        Number(item.price || 0) *
          Number(item.quantity || 1),
      0
    );
  }, [cartItems]);

  // =========================
  // DELIVERY
  // =========================

  const deliveryCharge =
    subtotal === 0 || subtotal >= 499
      ? 0
      : 40;

  const total = subtotal + deliveryCharge;

  const formatPrice = (price) =>
    `₹${Number(price || 0).toLocaleString("en-IN")}`;

  // =========================
  // INPUT HANDLER
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // RAZORPAY
  // =========================

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  // =========================
  // PAYMENT
  // =========================

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error(
        "You must be logged in to continue"
      );
      navigate("/login");
      return;
    }

    if (!cartItems.length) {
      toast.error("Your cart is empty");
      navigate("/products");
      return;
    }

    const {
      name,
      phone,
      address,
      city,
      state,
      pincode,
    } = shippingAddress;

    if (
      !name ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !pincode
    ) {
      toast.error(
        "Please complete your shipping address"
      );
      return;
    }

    try {
      setLoading(true);

      // =========================
      // LOAD RAZORPAY
      // =========================

      const razorpayLoaded =
        await loadRazorpay();

      if (!razorpayLoaded) {
        toast.error(
          "Razorpay failed to load"
        );
        return;
      }

      // =========================
      // CREATE RAZORPAY ORDER
      // =========================

      const { data } = await axios.post(
        `${API}/api/payment/create-order`,
        {
          amount: total,
        },
        {
          headers: {
            token,
          },
        }
      );

      const razorpayOrder = data.order;

      // =========================
      // RAZORPAY OPTIONS
      // =========================

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: razorpayOrder.amount,

        currency: "INR",

        name: "My Pharma",

        description:
          "Healthcare Product Purchase",

        order_id: razorpayOrder.id,

        handler: async function (response) {
          try {
            // =========================
            // VERIFY PAYMENT
            // =========================

            await axios.post(
              `${API}/api/payment/verify`,
              {
                razorpay_order_id:
                  response.razorpay_order_id,

                razorpay_payment_id:
                  response.razorpay_payment_id,

                razorpay_signature:
                  response.razorpay_signature,

                amount: total,

                cartItems,

                shippingAddress,
              },
              {
                headers: {
                  token,
                },
              }
            );

            toast.success(
              "Payment successful!"
            );
            
           await clearCartFromDatabase();
           
            navigate("/order-success");
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            toast.error(
              error?.response?.data?.message ||
                "Payment verification failed"
            );
          }
        },

        prefill: {
          name: shippingAddress.name,
          contact: shippingAddress.phone,
        },

        theme: {
          color: "#2563eb",
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay =
        new window.Razorpay(options);

      razorpay.on(
        "payment.failed",
        function (response) {
          console.error(
            "Payment failed:",
            response.error
          );

          toast.error(
            response.error?.description ||
              "Payment failed"
          );

          setLoading(false);
        }
      );

      razorpay.open();
    } catch (error) {
      console.error(
        "Payment initialization error:",
        error
      );

      toast.error(
        error?.response?.data?.message ||
          "Unable to initiate payment"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // EMPTY CART
  // =========================

  if (!cartItems.length) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto flex min-h-[500px] max-w-xl items-center justify-center">
          <div className="w-full border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center bg-blue-50 text-blue-600">
              <CheckCircle2 size={30} />
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              Your cart is empty
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Add some products before proceeding
              to checkout.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Browse Products
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8 lg:py-11">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8">

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to Cart
          </Link>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter your delivery details and
            complete your payment securely.
          </p>

        </div>

        <form
          onSubmit={handlePayment}
          className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_370px]"
        >

          {/* ================= LEFT ================= */}

          <section className="border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

            {/* ADDRESS HEADER */}

            <div className="border-b border-slate-100 px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <span className="block text-[10px] font-bold tracking-[0.16em] text-blue-600">
                    DELIVERY
                  </span>

                  <h2 className="text-xl font-bold text-slate-900">
                    Shipping Address
                  </h2>
                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="grid gap-5 p-6 sm:grid-cols-2">

              {/* NAME */}

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={shippingAddress.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-11 w-full border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* PHONE */}

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={shippingAddress.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  maxLength={10}
                  className="h-11 w-full border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* ADDRESS */}

              <div className="sm:col-span-2">

                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Address
                </label>

                <textarea
                  name="address"
                  value={shippingAddress.address}
                  onChange={handleChange}
                  placeholder="House number, street, area"
                  rows={3}
                  className="w-full resize-none border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* CITY */}

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={shippingAddress.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="h-11 w-full border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* STATE */}

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={shippingAddress.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="h-11 w-full border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* PINCODE */}

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-700">
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={shippingAddress.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                  maxLength={6}
                  className="h-11 w-full border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>

            {/* TRUST */}

            <div className="grid border-t border-slate-100 bg-slate-50/70 sm:grid-cols-3">

              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">
                <ShieldCheck
                  size={20}
                  className="text-blue-600"
                />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Secure Payment
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Protected checkout
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">
                <Truck
                  size={20}
                  className="text-blue-600"
                />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Fast Delivery
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Delivered safely
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-5 py-4">
                <Lock
                  size={20}
                  className="text-blue-600"
                />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Data Protected
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Your information is safe
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* ================= SUMMARY ================= */}

          <aside className="sticky top-24 border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:p-6">

            <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-blue-600">
              YOUR ORDER
            </span>

            <h2 className="text-xl font-bold text-slate-900">
              Order Summary
            </h2>

            {/* ITEMS */}

            <div className="mt-5 max-h-64 space-y-4 overflow-y-auto border-y border-slate-100 py-5">

              {cartItems.map((item) => {

                const quantity =
                  Number(item.quantity) || 1;

                return (
                  <div
                    key={item.productId}
                    className="flex gap-3"
                  >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-slate-200 bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-semibold text-slate-800">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Qty: {quantity}
                      </p>

                    </div>

                    <span className="text-sm font-semibold text-slate-800">
                      {formatPrice(
                        Number(item.price) *
                          quantity
                      )}
                    </span>

                  </div>
                );
              })}

            </div>

            {/* PRICE */}

            <div className="space-y-4 py-5">

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Subtotal
                </span>

                <span className="font-semibold text-slate-800">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Delivery
                </span>

                <span
                  className={
                    deliveryCharge === 0
                      ? "font-semibold text-emerald-600"
                      : "font-semibold text-slate-800"
                  }
                >
                  {deliveryCharge === 0
                    ? "FREE"
                    : formatPrice(
                        deliveryCharge
                      )}
                </span>
              </div>

            </div>

            {/* TOTAL */}

            <div className="flex items-center justify-between border-y border-slate-100 py-5">

              <span className="text-sm font-semibold text-slate-700">
                Total Amount
              </span>

              <span className="text-2xl font-bold text-slate-900">
                {formatPrice(total)}
              </span>

            </div>

            {/* PAY */}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Processing...
                </>
              ) : (
                <>
                  Pay {formatPrice(total)}
                  <ArrowRight size={18} />
                </>
              )}

            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
              <ShieldCheck
                size={14}
                className="text-emerald-500"
              />

              Secured by Razorpay
            </div>

          </aside>

        </form>

      </div>

    </main>
  );
};

export default CheckoutPage;