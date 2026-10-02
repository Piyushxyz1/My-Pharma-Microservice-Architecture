import React, { useState } from "react";
import {
  ArrowRight,
  Search,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Clock,
  HeartPulse,
  Pill,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../components/hooks/useCart";
import { medicalProducts, categories } from "../assets/products";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { addToCart } = useCart();

  // ================================
  // CATEGORY FILTER
  // ================================
  const handleCategory = (categoryName) => {
    setSelectedCategory(categoryName);

    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // ================================
  // CLEAR CATEGORY
  // ================================
  const clearCategory = () => {
    setSelectedCategory("");
  };

  // ================================
  // PRODUCT FILTER
  // ================================
  const filteredProducts = medicalProducts.filter((product) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // ================================
  // TRUST FEATURES
  // ================================
  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "Quality Products",
      text: "Trusted healthcare essentials",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      text: "Quick doorstep delivery",
    },
    {
      icon: Clock,
      title: "Easy Ordering",
      text: "Simple and secure shopping",
    },
    {
      icon: HeartPulse,
      title: "Health First",
      text: "Products selected for you",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f8fb] text-slate-900">

      {/* =====================================================
          HERO / INTRO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#061827]">

        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div className="max-w-2xl">

              {/* Small Label */}
              <div className="mb-6 inline-flex items-center gap-2 border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
                <HeartPulse size={16} />
                Healthcare • Pharmacy
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Better care.
                <span className="block text-blue-400">
                  Better living.
                </span>
              </h1>

              {/* Intro */}
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Discover trusted medicines, wellness essentials and everyday
                healthcare products — all in one simple and reliable place.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-wrap items-center gap-4">

                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-2 bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Shop Medicines

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <div className="flex items-center gap-3 text-sm text-slate-400">

                  <div className="flex -space-x-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#061827] bg-blue-100">
                      <HeartPulse
                        size={14}
                        className="text-blue-600"
                      />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#061827] bg-slate-100">
                      <Pill
                        size={14}
                        className="text-blue-600"
                      />
                    </div>

                  </div>

                  <span>
                    Trusted healthcare essentials
                  </span>

                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================= */}
            <div className="relative">

              <div className="absolute -inset-5 bg-blue-500/10 blur-3xl" />

              <div className="relative overflow-hidden border border-white/10 bg-white/5 p-3">

                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85"
                  alt="Healthcare products"
                  className="h-[380px] w-full object-cover sm:h-[460px]"
                />

                {/* Floating Card */}
                <div className="absolute bottom-7 left-7 right-7 border border-white/10 bg-[#071a2d]/90 p-5 backdrop-blur-md">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs font-medium uppercase tracking-wider text-blue-300">
                        Healthcare
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        Everything you need, in one place.
                      </p>

                    </div>

                    <div className="hidden h-11 w-11 items-center justify-center bg-blue-600 sm:flex">
                      <HeartPulse
                        size={21}
                        className="text-white"
                      />
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST BAR
      ===================================================== */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">

          {trustFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 px-5 py-6 sm:px-8"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-50">
                  <Icon
                    size={20}
                    className="text-blue-600"
                  />
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.text}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}
      <section className="bg-[#f5f8fb] px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Explore
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Shop by category
              </h2>

              <p className="mt-3 max-w-xl text-slate-500">
                Find the healthcare products you need quickly and easily.
              </p>

            </div>

            {selectedCategory && (
              <button
                onClick={clearCategory}
                className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                View all products
              </button>
            )}

          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">

            {categories.map((category) => {
              const Icon = category.icon;

              const isSelected =
                selectedCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => handleCategory(category.name)}
                  className={`group border p-5 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/15"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  }`}
                >

                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center ${
                      isSelected
                        ? "bg-white/15"
                        : "bg-blue-50 group-hover:bg-blue-100"
                    }`}
                  >

                    <Icon
                      size={21}
                      className={
                        isSelected
                          ? "text-white"
                          : "text-blue-600"
                      }
                    />

                  </div>

                  <p
                    className={`text-sm font-semibold leading-5 ${
                      isSelected
                        ? "text-white"
                        : "text-slate-800"
                    }`}
                  >
                    {category.name}
                  </p>

                </button>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}
      <section
        id="products"
        className="border-y border-slate-200 bg-white px-6 py-20 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          {/* Product Heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                {selectedCategory || "Medical Store"}
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {selectedCategory
                  ? `${selectedCategory} products`
                  : "Medicines & Healthcare"}
              </h2>

              <p className="mt-3 max-w-xl text-slate-500">
                {selectedCategory
                  ? `Browse ${selectedCategory.toLowerCase()} products.`
                  : "Browse our healthcare products or choose a category to narrow your search."}
              </p>

            </div>

            <Link
              to="/product-list"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* =================================================
              NO PRODUCTS
          ================================================= */}
          {filteredProducts.length === 0 ? (

            <div className="border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-white shadow-sm">
                <Search
                  size={24}
                  className="text-slate-400"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-800">
                No products found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for another healthcare product or category.
              </p>

              {selectedCategory && (
                <button
                  onClick={clearCategory}
                  className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Clear category filter
                </button>
              )}

            </div>

          ) : (

            /* =================================================
                PRODUCT GRID
                DEFAULT = 10 PRODUCTS
            ================================================= */
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {filteredProducts.slice(0, 10).map((product) => (

                <div
                  key={product.id}
                  className="group flex flex-col border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >

                  {/* PRODUCT IMAGE */}
                  <Link
                    to={`/products/${product.id}`}
                    className="relative block overflow-hidden bg-slate-50"
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Discount */}
                    {product.discount && (
                      <span className="absolute left-3 top-3 bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
                        {product.discount}% OFF
                      </span>
                    )}

                    {/* Stock */}
                    <span
                      className={`absolute right-3 top-3 px-2.5 py-1 text-xs font-semibold ${
                        product.stock > 0
                          ? "bg-white text-emerald-600"
                          : "bg-white text-red-600"
                      }`}
                    >
                      {product.stock > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>

                  </Link>

                  {/* PRODUCT CONTENT */}
                  <div className="flex flex-1 flex-col p-5">

                    {/* Category + Rating */}
                    <div className="mb-3 flex items-center justify-between gap-3">

                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {product.category}
                      </span>

                      <div className="flex items-center gap-1 text-xs text-slate-500">

                        <Star
                          size={13}
                          fill="currentColor"
                          className="text-amber-400"
                        />

                        {product.rating}

                      </div>

                    </div>

                    {/* Product Name */}
                    <Link to={`/products/${product.id}`}>

                      <h3 className="line-clamp-2 min-h-[48px] text-base font-semibold leading-6 text-slate-900 transition-colors group-hover:text-blue-600">
                        {product.name}
                      </h3>

                    </Link>

                    {/* Description */}
                    <p className="mt-2 line-clamp-2 min-h-[40px] text-sm leading-5 text-slate-500">
                      {product.description}
                    </p>

                    {/* Bottom */}
                    <div className="mt-auto pt-5">

                      {/* Price */}
                      <div className="mb-4 flex items-end justify-between">

                        <div>

                          <span className="text-xl font-bold text-slate-900">
                            ₹{product.price}
                          </span>

                          {product.oldPrice && (
                            <span className="ml-2 text-sm text-slate-400 line-through">
                              ₹{product.oldPrice}
                            </span>
                          )}

                        </div>

                        <span className="text-xs text-slate-400">
                          {product.reviews} reviews
                        </span>

                      </div>

                      {/* Add To Cart */}
                      <button
                        onClick={() => addToCart(product)}
                        disabled={product.stock <= 0}
                        className={`flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-semibold transition ${
                          product.stock > 0
                            ? "bg-[#071a2d] text-white hover:bg-blue-600"
                            : "cursor-not-allowed bg-slate-100 text-slate-400"
                        }`}
                      >

                        <ShoppingCart size={17} />

                        {product.stock > 0
                          ? "Add to Cart"
                          : "Out of Stock"}

                      </button>

                    </div>
                  </div>
                </div>

              ))}

            </div>
          )}

          {/* =================================================
              CATEGORY BROWSE MESSAGE
          ================================================= */}
          {!selectedCategory &&
            filteredProducts.length > 10 && (
              <div className="mt-10 border-t border-slate-200 pt-7 text-center">

                <p className="text-sm text-slate-500">
                  Showing 10 products. Browse by category to find
                  exactly what you need.
                </p>

                <Link
                  to="/product-list"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Browse all products

                  <ArrowRight size={15} />
                </Link>

              </div>
            )}

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[#061827] px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-blue-600">
            <HeartPulse
              size={26}
              className="text-white"
            />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Your health matters
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Healthcare shopping,
            <span className="block text-blue-400">
              made simple.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Find trusted medicines, wellness products and healthcare
            essentials without making your shopping complicated.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group mt-8 inline-flex items-center gap-2 bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Explore Products

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

        </div>
      </section>

    </div>
  );
};

export default HomePage;