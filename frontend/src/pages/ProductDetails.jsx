import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Heart,
  ShoppingCart,
  Check,
  ShieldCheck,
  Truck,
  Package,
  Minus,
  Plus,
  Info,
  CheckCircleIcon,
} from "lucide-react";
import { toast } from "react-toastify";
import useCart from "../components/hooks/useCart";

import { medicalProducts } from "../assets/products";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = medicalProducts.find(
    (item) => String(item.id) === String(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("benefits");

  if (!product) {
    return (
      <div className="min-h-screen bg-[#071a2d] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-blue-400 text-sm uppercase tracking-[0.2em] mb-4">
            Product
          </p>

          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-7 bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-500"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = async () => {
    if (product.stock <= 0) {
      toast.error("Product is out of stock");
      return;
    }

    // Current backend addToCart accepts only product.
    // So first add product normally.
    await addToCart(product);

    /*
      NOTE:
      Abhi tumhara useCart addToCart(product) backend
      mein quantity ko 1 se add karta hai.

      Agar tum selected quantity (2,3,4...) bhi backend
      mein bhejna chahte ho, to useCart ko quantity support
      karwana padega.
    */
  };

  return (
    <div className="min-h-screen bg-[#071a2d] text-white">

      {/* =========================
          TOP
      ========================= */}

      <div className="border-b border-[#18334a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

        </div>
      </div>

      {/* =========================
          PRODUCT
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* =========================
              IMAGE
          ========================= */}

          <div>

            <div className="relative border border-[#23435b] bg-[#0a2035] overflow-hidden">

              {product.discount && (
                <div className="absolute top-5 left-5 z-10 bg-blue-600 px-3 py-1.5 text-xs font-bold">
                  {product.discount}% OFF
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[450px] md:h-[560px] object-cover"
              />

            </div>

            {/* TRUST */}

            <div className="grid grid-cols-3 border border-[#23435b] border-t-0">

              <div className="p-4 border-r border-[#23435b]">
                <ShieldCheck className="w-5 h-5 text-blue-400 mb-2" />

                <p className="text-xs text-slate-400">
                  Secure Shopping
                </p>
              </div>

              <div className="p-4 border-r border-[#23435b]">
                <Truck className="w-5 h-5 text-blue-400 mb-2" />

                <p className="text-xs text-slate-400">
                  Fast Delivery
                </p>
              </div>

              <div className="p-4">
                <Package className="w-5 h-5 text-blue-400 mb-2" />

                <p className="text-xs text-slate-400">
                  Quality Products
                </p>
              </div>

            </div>

          </div>

          {/* =========================
              DETAILS
          ========================= */}

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold">
              {product.category}
            </p>

            <div className="flex items-start justify-between gap-6 mt-3">

              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {product.name}
              </h1>

              <button
                type="button"
                className="w-11 h-11 flex-shrink-0 border border-[#31506a] flex items-center justify-center hover:border-blue-500 transition-colors"
              >
                <Heart size={19} />
              </button>

            </div>

            {/* RATING */}

            <div className="flex items-center gap-4 mt-5">

              <div className="flex items-center gap-1">

                <Star
                  size={17}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="font-semibold">
                  {product.rating}
                </span>

              </div>

              <span className="text-slate-500">
                |
              </span>

              <span className="text-sm text-slate-400">
                {product.reviews} customer reviews
              </span>

            </div>

            {/* DESCRIPTION */}

            <p className="text-slate-400 leading-relaxed mt-7">
              {product.description}
            </p>

            {/* PRICE */}

            <div className="mt-8 pb-8 border-b border-[#23435b]">

              <div className="flex items-center gap-4 flex-wrap">

                <span className="text-3xl font-bold">
                  ₹{product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-lg text-slate-500 line-through">
                    ₹{product.oldPrice}
                  </span>
                )}

                {product.discount && (
                  <span className="text-sm font-semibold text-blue-400">
                    Save {product.discount}%
                  </span>
                )}

              </div>

              <p className="text-xs text-slate-500 mt-2">
                Inclusive of applicable taxes
              </p>

            </div>

            {/* STOCK */}

            <div className="py-6">

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-400">
                  Availability
                </span>

                <span
                  className={`text-sm font-medium ${
                    product.stock > 0
                      ? "text-blue-400"
                      : "text-red-400"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} items available`
                    : "Out of stock"}
                </span>

              </div>

              <div className="h-1 bg-[#18334a] mt-3">

                <div
                  className="h-full bg-blue-500 transition-all"
                  style={{
                    width: `${Math.min(product.stock, 100)}%`,
                  }}
                />

              </div>

            </div>

        
            {/* =========================
                ACTIONS
            ========================= */}

            <div className="flex gap-3 mt-7">

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 h-12 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button
                type="button"
                className="px-5 h-12 border border-[#31506a] hover:border-blue-500 transition-colors"
              >
                <Heart size={18} />
              </button>

            </div>

            {/* DELIVERY */}

            <div className="mt-7 border border-[#23435b] bg-[#0a2035] p-5">

              <div className="flex gap-4">

                <Truck className="w-5 h-5 text-blue-400 flex-shrink-0" />

                <div>

                  <p className="text-sm font-semibold">
                    Delivery Information
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {product.delivery}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          INFORMATION
      ========================= */}

      <section className="border-y border-[#18334a] bg-[#0a1f32]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* TABS */}

          <div className="flex flex-wrap border-b border-[#23435b]">

            {[
              ["benefits", "Benefits"],
              ["features", "Key Features"],
              ["specifications", "Specifications"],
              ["usage", "Usage & Safety"],
            ].map(([tabId, label]) => (

              <button
                key={tabId}
                type="button"
                onClick={() => setActiveTab(tabId)}
                className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tabId
                    ? "text-blue-400 border-blue-500"
                    : "text-slate-500 border-transparent hover:text-white"
                }`}
              >
                {label}
              </button>

            ))}

          </div>

          <div className="py-10">

            {/* =========================
                BENEFITS
            ========================= */}

            {activeTab === "benefits" && (

              <div className="grid md:grid-cols-2 gap-10">

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                    Product Benefits
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold">
                    What this product offers
                  </h2>

                  <p className="text-slate-400 mt-4 leading-relaxed">
                    Explore the key benefits and everyday uses associated
                    with this product.
                  </p>

                </div>

                <div className="space-y-4">

                  {product.benefits?.map((benefit, index) => (

                    <div
                      key={index}
                      className="flex gap-4 border-b border-[#23435b] pb-4"
                    >

                      <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />

                      <span className="text-sm text-slate-300">
                        {benefit}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            )}

            {/* =========================
                FEATURES
            ========================= */}

            {activeTab === "features" && (

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                  Product Details
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Key Features
                </h2>

                <div className="grid md:grid-cols-2 gap-px bg-[#23435b] border border-[#23435b]">

                  {product.features?.map((feature, index) => (

                    <div
                      key={index}
                      className="bg-[#071a2d] p-6 flex gap-4"
                    >

                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />

                      <span className="text-sm text-slate-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            )}

            {/* =========================
                SPECIFICATIONS
            ========================= */}

            {activeTab === "specifications" && (

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                  Product Information
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Specifications
                </h2>

                <div className="border border-[#23435b]">

                  {product.specifications &&
                    Object.entries(product.specifications).map(
                      ([key, value], index) => (

                        <div
                          key={key}
                          className={`grid grid-cols-1 md:grid-cols-2 ${
                            index !== 0
                              ? "border-t border-[#23435b]"
                              : ""
                          }`}
                        >

                          <div className="p-5 bg-[#0a2035] text-sm text-slate-400">
                            {key}
                          </div>

                          <div className="p-5 text-sm text-slate-200">
                            {value}
                          </div>

                        </div>

                      )
                    )}

                </div>

              </div>

            )}

            {/* =========================
                USAGE
            ========================= */}

            {activeTab === "usage" && (

              <div className="grid md:grid-cols-2 gap-6">

                <div className="border border-[#23435b] bg-[#071a2d] p-7">

                  <Info className="w-6 h-6 text-blue-400 mb-5" />

                  <h3 className="text-xl font-semibold mb-4">
                    How to Use
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {product.usage}
                  </p>

                </div>

                <div className="border border-[#23435b] bg-[#071a2d] p-7">

                  <ShieldCheck className="w-6 h-6 text-blue-400 mb-5" />

                  <h3 className="text-xl font-semibold mb-4">
                    Safety Information
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {product.safety}
                  </p>

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* =========================
          IN THE BOX
      ========================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
              Included
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What's in the box
            </h2>

            <div className="space-y-4">

              {product.inTheBox?.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircleIcon className="w-5 h-5 text-blue-400" />

                  <span className="text-sm text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="border border-[#23435b] bg-[#0a2035] p-7">

            <div className="flex gap-4">

              <ShieldCheck className="w-6 h-6 text-blue-400 flex-shrink-0" />

              <div>

                <h3 className="font-semibold text-lg">
                  Important Information
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mt-3">
                  Product information is provided for general shopping
                  purposes. Always read the manufacturer's packaging and
                  instructions before using healthcare products.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="border-t border-[#18334a] py-16">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
            Health & Wellness
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Find more products for your routine
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore healthcare, fitness, wellness, nutrition, and personal
            care products in one place.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-500 px-7 py-3 text-sm font-semibold transition-colors group"
          >
            Explore Products

            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default ProductDetails;