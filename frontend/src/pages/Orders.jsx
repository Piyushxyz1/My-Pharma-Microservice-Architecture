import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  ArrowLeft,
  Clock3,
  CheckCircle2,
  CreditCard,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ORDERS_API from "../config/api"

const Orders = () => {
  const API = ORDERS_API.API
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Token Redux ke auth slice se
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!token) {
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `${API}/api/orders`,
          {
            headers: {
              token: token,
            },
          }
        );

        if (response.data.success) {
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.error("Fetch orders error:", error);

        toast.error(
          error.response?.data?.message || "Unable to fetch orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/products"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>

          <h1 className="text-3xl font-bold text-slate-900">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Track and manage your recent orders.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="border border-slate-200 bg-white py-16 text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />

            <p className="mt-4 text-sm text-slate-500">
              Loading your orders...
            </p>
          </div>
        )}

        {/* No Orders */}
        {!loading && orders.length === 0 && (
          <div className="border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Package size={40} strokeWidth={1.7} />
            </div>

            <h2 className="mt-6 text-xl font-semibold text-slate-900">
              No orders yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Once you place an order, you will be able to view its details,
              payment status and delivery information here.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex min-h-11 items-center justify-center bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* Orders */}
        {!loading && orders.length > 0 && (
          <div className="space-y-5">

            {orders.map((order) => (
              <div
                key={order._id}
                className="border border-slate-200 bg-white shadow-sm"
              >

                {/* Order Header */}
                <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:px-6">

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-slate-400">
                      ORDER ID
                    </p>

                    <p className="mt-1 font-mono text-sm font-semibold text-slate-900">
                      #{order._id}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                    <CheckCircle2 size={18} />
                    {order.orderStatus}
                  </div>
                </div>

                {/* Order Items */}
                <div className="divide-y divide-slate-100">

                  {order.items.map((item, index) => (
                    <div
                      key={`${order._id}-${item.productId}-${index}`}
                      className="flex items-center gap-4 px-5 py-4 sm:px-6"
                    >

                      <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-slate-50">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <Package
                            size={25}
                            className="text-slate-400"
                          />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold text-slate-900">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <p className="text-sm font-semibold text-slate-900">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Order Footer */}
                <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                  <div className="flex flex-wrap gap-5">

                    {/* Payment */}
                    <div className="flex items-center gap-2">
                      <CreditCard
                        size={17}
                        className="text-blue-600"
                      />

                      <div>
                        <p className="text-[10px] font-bold tracking-wider text-slate-400">
                          PAYMENT
                        </p>

                        <p className="text-xs font-semibold capitalize text-slate-700">
                          {order.payment?.status || "Paid"}
                        </p>
                      </div>
                    </div>

                    {/* Order Date */}
                    <div className="flex items-center gap-2">
                      <Clock3
                        size={17}
                        className="text-blue-600"
                      />

                      <div>
                        <p className="text-[10px] font-bold tracking-wider text-slate-400">
                          ORDER DATE
                        </p>

                        <p className="text-xs font-semibold text-slate-700">
                          {new Date(
                            order.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Total */}
                  <div>
                    <p className="text-[10px] font-bold tracking-wider text-slate-400">
                      TOTAL
                    </p>

                    <p className="text-xl font-bold text-blue-600">
                      ₹{order.totalAmount}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Orders;