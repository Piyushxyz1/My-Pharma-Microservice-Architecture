
import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Package,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl text-center">

        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={56} strokeWidth={1.8} />
        </div>

        {/* Label */}
        <span className="mb-3 inline-block text-xs font-bold tracking-[0.2em] text-blue-600">
          PAYMENT SUCCESSFUL
        </span>

        {/* Heading */}
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Your Order Has Been
          <span className="text-blue-600"> Confirmed</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Thank you for choosing My Pharma. Your order has been placed
          successfully and is now being prepared for delivery.
        </p>

        {/* Order Information */}
        <div className="mt-8 flex flex-col border border-slate-200 bg-white p-5 text-left shadow-[0_12px_35px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center sm:p-6">

          {/* Status */}
          <div className="flex flex-1 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Package size={21} />
            </div>

            <div>
              <span className="block text-[10px] font-bold tracking-widest text-slate-400">
                ORDER STATUS
              </span>
              <strong className="text-sm font-semibold text-slate-900">
                Confirmed
              </strong>
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-slate-200 sm:mx-7 sm:my-0 sm:h-12 sm:w-px" />

          {/* Delivery */}
          <div className="flex flex-1 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <ShoppingBag size={21} />
            </div>

            <div>
              <span className="block text-[10px] font-bold tracking-widest text-slate-400">
                DELIVERY
              </span>
              <strong className="text-sm font-semibold text-slate-900">
                Preparing for dispatch
              </strong>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/orders"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View My Orders
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/products"
            className="inline-flex min-h-12 items-center justify-center border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
          >
            Continue Shopping
          </Link>

        </div>

        {/* Support */}
        <p className="mt-7 text-xs text-slate-400">
          Need help with your order? Our support team is here for you.
        </p>

      </div>
    </div>
  );
};

export default OrderSuccess;

