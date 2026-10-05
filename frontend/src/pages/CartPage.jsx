import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Trash2,
  ShoppingBag,
  PackageCheck,
  Minus,
  Plus,
} from "lucide-react";

import { useSelector } from "react-redux";

import useCart from "../components/hooks/useCart";


const CartPage = () => {

  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const {
    updateQuantity,
    removeFromCart,
  } = useCart();


  // =========================
  // TOTAL ITEMS
  // =========================

  const itemCount = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.quantity || 1),
    0
  );


  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );


  // =========================
  // DELIVERY
  // =========================

  const deliveryCharge =
    subtotal === 0 || subtotal >= 499
      ? 0
      : 40;


  const total =
    subtotal + deliveryCharge;


  const formatPrice = (price) =>
    `₹${Number(
      price || 0
    ).toLocaleString("en-IN")}`;


  // =========================
  // EMPTY CART
  // =========================

  if (!cartItems.length) {

    return (
      <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 pt-24 pb-10 sm:px-6 sm:pt-10 lg:px-8 lg:pt-11">

        <div className="mx-auto flex min-h-[550px] max-w-6xl items-center justify-center">

          <div className="w-full max-w-xl border border-slate-200 bg-white px-6 py-14 text-center shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:px-12">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border border-blue-100 bg-blue-50 text-blue-600">

              <ShoppingBag
                size={34}
                strokeWidth={1.7}
              />

            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              You haven't added any medicines or
              healthcare products to your cart yet.
            </p>

            <Link
              to="/products"
              className="mx-auto mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 bg-blue-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Browse Products
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </main>
    );
  }


  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 pt-24 pb-8 sm:px-6 sm:pt-8 lg:px-8 lg:py-11">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <Link
              to="/products"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your Cart
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Review your medicines and healthcare
              products before checkout.
            </p>

          </div>

          <div className="w-fit border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
            {itemCount}{" "}
            {itemCount === 1
              ? "Item"
              : "Items"}
          </div>

        </div>


        {/* ================= MAIN ================= */}

        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_370px]">


          {/* ================= LEFT ================= */}

          <section className="border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

            {/* HEADER */}

            <div className="flex items-end justify-between border-b border-slate-100 px-5 py-5 sm:px-7">

              <div>

                <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-blue-600">
                  YOUR SELECTION
                </span>

                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Cart Items
                </h2>

              </div>

              <span className="text-xs text-slate-400">
                {cartItems.length} products
              </span>

            </div>


            {/* ================= ITEMS ================= */}

            <div className="divide-y divide-slate-100 px-5 sm:px-7">

              {cartItems.map((item) => {

                const quantity =
                  Number(item.quantity) || 1;

                const itemTotal =
                  Number(item.price || 0) *
                  quantity;

                return (

                  <div
                    key={item.productId}
                    className="flex flex-col gap-5 py-6 sm:grid sm:grid-cols-[92px_minmax(0,1fr)_auto_40px] sm:items-center sm:gap-5"
                  >

                    {/* IMAGE */}

                    <div className="flex h-[92px] w-[92px] shrink-0 items-center justify-center border border-slate-200 bg-slate-50">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-2"
                      />

                    </div>


                    {/* INFO */}

                    <div className="min-w-0">

                      <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {item.category ||
                          "Healthcare"}
                      </span>

                      <h3 className="text-[16px] font-semibold leading-6 text-slate-800">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        Genuine healthcare product
                      </p>


                      {/* QUANTITY */}

                      <div className="mt-4 flex items-center gap-3">

                        <span className="text-xs font-medium text-slate-500">
                          Quantity
                        </span>

                        <div className="flex h-9 items-center border border-slate-200 bg-white">

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                "decrease"
                              )
                            }
                            className="flex h-full w-9 items-center justify-center text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="flex h-full min-w-9 items-center justify-center border-x border-slate-200 px-2 text-sm font-semibold text-slate-800">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                "increase"
                              )
                            }
                            className="flex h-full w-9 items-center justify-center text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>

                        </div>

                      </div>

                    </div>


                    {/* PRICE */}

                    <div className="text-left sm:text-right">

                      <span className="mb-1 block text-[10px] uppercase tracking-wide text-slate-400">
                        Total
                      </span>

                      <strong className="text-base font-bold text-slate-900">
                        {formatPrice(itemTotal)}
                      </strong>

                      {quantity > 1 && (
                        <span className="mt-1 block text-[11px] text-slate-400">
                          {formatPrice(item.price)} ×{" "}
                          {quantity}
                        </span>
                      )}

                    </div>


                    {/* REMOVE */}

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(
                          item.productId
                        )
                      }
                      className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-white text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500 sm:justify-self-end"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                );
              })}

            </div>


            {/* ================= TRUST ================= */}

            <div className="grid border-t border-slate-100 bg-slate-50/70 sm:grid-cols-3">

              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">

                <ShieldCheck
                  size={20}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Secure Shopping
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Protected information
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">

                <PackageCheck
                  size={20}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Quality Assured
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Verified products
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3 px-5 py-4">

                <Truck
                  size={20}
                  className="shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-xs font-semibold text-slate-700">
                    Fast Delivery
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    To your doorstep
                  </p>
                </div>

              </div>

            </div>

          </section>


          {/* ================= SUMMARY ================= */}

          <aside className="sticky top-24 border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:p-6">

            <div className="border-b border-slate-100 pb-5">

              <span className="mb-1 block text-[10px] font-bold tracking-[0.16em] text-blue-600">
                ORDER DETAILS
              </span>

              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Order Summary
              </h2>

            </div>


            <div className="space-y-5 py-5">

              <div className="flex items-center justify-between text-sm">

                <span className="text-slate-500">
                  Subtotal
                </span>

                <span className="font-semibold text-slate-800">
                  {formatPrice(subtotal)}
                </span>

              </div>


              <div className="flex items-center justify-between text-sm">

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


              {deliveryCharge > 0 && (

                <div className="flex gap-2 border border-blue-100 bg-blue-50 px-3 py-3 text-[11px] leading-4 text-blue-700">

                  <Truck
                    size={15}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    Add{" "}
                    <strong>
                      {formatPrice(
                        499 - subtotal
                      )}
                    </strong>{" "}
                    more to unlock free delivery.
                  </span>

                </div>

              )}

            </div>


            {/* TOTAL */}

            <div className="flex items-center justify-between border-y border-slate-100 py-5">

              <span className="text-sm font-semibold text-slate-700">
                Total Amount
              </span>

              <span className="text-2xl font-bold tracking-tight text-slate-900">
                {formatPrice(total)}
              </span>

            </div>


            {/* CHECKOUT */}

            <button
              type="button"
              onClick={() =>
                navigate("/checkout")
              }
              className="mt-5 flex min-h-[51px] w-full items-center justify-center gap-2 bg-blue-600 px-5 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:translate-y-0"
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </button>


            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">

              <CheckCircle2
                size={15}
                className="text-emerald-500"
              />

              Secure checkout & protected payment

            </div>

          </aside>

        </div>

      </div>

    </main>
  );
};

export default CartPage;