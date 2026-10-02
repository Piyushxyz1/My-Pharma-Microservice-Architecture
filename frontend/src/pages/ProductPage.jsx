import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Star,
  ArrowRight,
  Heart,
  ShieldCheck,
  Truck,
  PackageCheck,
  Stethoscope,
  ChevronDown,
} from "lucide-react";
import { toast } from "react-toastify";
import { medicalProducts } from "../assets/products";
import useCart from "../components/hooks/useCart";



const categories = [
  "All",
  ...new Set(medicalProducts.map((product) => product.category)),
];

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const {addToCart} = useCart()

  const filteredProducts = useMemo(() => {
    return medicalProducts.filter((product) => {
      const value = search.toLowerCase().trim();

      const matchesSearch =
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value);

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };



  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#0a1929] m-10">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#0a1929]">

        <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=85"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1929] via-[#0a1929]/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">

          <div className="max-w-2xl">

            <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-blue-300">
              <span className="flex h-9 w-9 items-center justify-center border border-blue-400/30 bg-blue-400/10">
                <Stethoscope size={18} />
              </span>

              TRUSTED HEALTHCARE STORE
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Everything you need
              <span className="block text-blue-400">
                for better health.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              Shop medicines, wellness essentials and
              healthcare products from one trusted store.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 px-3 text-sm text-slate-300">
                <ShieldCheck
                  size={18}
                  className="text-blue-400"
                />
                Secure & reliable
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SEARCH ================= */}

      <section className="relative z-10 mx-auto -mt-7 max-w-7xl px-6 md:px-10 lg:px-16">

        <div className="border border-slate-200 bg-white p-3 shadow-xl">

          <div className="flex flex-col gap-3 lg:flex-row">

            <div className="relative flex-1">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medicines, vitamins, healthcare products..."
                className="h-14 w-full bg-slate-50 pl-12 pr-5 text-sm text-slate-800 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-100"
              />

            </div>

            <button className="flex h-14 items-center justify-center gap-2 border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 hover:border-blue-300">
              All Categories
              <ChevronDown size={16} />
            </button>

            <button className="h-14 bg-[#0b2035] px-8 text-sm font-bold text-white transition hover:bg-[#2563eb]">
              Search
            </button>

          </div>

        </div>
      </section>


      {/* ================= CATEGORY BAR ================= */}

      <section className="mx-auto max-w-7xl px-6 pt-12 md:px-10 lg:px-16">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#2563eb]">
              Browse
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Shop by category
            </h2>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            Find what you need faster
          </span>

        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap border px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "border-[#0b2035] bg-[#0b2035] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {category}
            </button>

          ))}

        </div>
      </section>


      {/* ================= PRODUCTS ================= */}

      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16"
      >

        <div className="mb-7 flex items-end justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#2563eb]">
              Featured collection
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Healthcare essentials
            </h2>
          </div>

          <span className="text-sm font-medium text-slate-500">
            {filteredProducts.length} products
          </span>

        </div>


        {filteredProducts.length === 0 ? (

          <div className="border border-slate-200 bg-white py-24 text-center">

            <Search
              size={36}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-5 text-xl font-bold">
              No products found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another medicine or category.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => {

              const isWishlisted = wishlist.includes(product.id);

              return (
                <article
                  key={product.id}
                  className="group border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >

                  {/* IMAGE */}

                  <div className="relative h-64 overflow-hidden bg-[#f1f5f9]">

                    <Link
                      to={`/products/${product.id}`}
                      className="block h-full"
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105"
                      />

                    </Link>


                    {/* DISCOUNT */}

                    {product.discount && (
                      <span className="absolute left-4 top-4 bg-[#0b2035] px-2.5 py-1.5 text-[11px] font-bold text-white">
                        {product.discount}% OFF
                      </span>
                    )}


                    {/* WISHLIST */}

                    <button
                      onClick={() =>
                        toggleWishlist(product.id)
                      }
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white shadow-md transition hover:bg-blue-50"
                    >
                      <Heart
                        size={17}
                        className={
                          isWishlisted
                            ? "fill-red-500 text-red-500"
                            : "text-slate-600"
                        }
                      />
                    </button>


                    {/* QUICK VIEW */}

                    <Link
                      to={`/products/${product.id}`}
                      className="absolute bottom-4 left-4 right-4 flex h-10 translate-y-3 items-center justify-center gap-2 bg-white/95 text-xs font-bold text-[#0a1929] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      View Product
                      <ArrowRight size={15} />
                    </Link>

                  </div>


                  {/* CONTENT */}

                  <div className="p-5">

                    <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#2563eb]">
                      {product.category}
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      className="mt-2 block min-h-[48px] text-[15px] font-bold leading-6 text-[#0a1929] transition hover:text-[#2563eb]"
                    >
                      {product.name}
                    </Link>


                    {/* RATING */}

                    <div className="mt-3 flex items-center gap-2">

                      <div className="flex items-center gap-1">

                        <Star
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="text-sm font-bold text-slate-700">
                          {product.rating}
                        </span>

                      </div>

                      <span className="text-xs text-slate-400">
                        ({product.reviews})
                      </span>

                    </div>


                    {/* PRICE */}

                    <div className="mt-4 flex items-end gap-2">

                      <span className="text-2xl font-bold text-[#0a1929]">
                        ₹{product.price}
                      </span>

                      <span className="mb-1 text-sm text-slate-400 line-through">
                        ₹{product.oldPrice}
                      </span>

                    </div>


                    <div className="mt-1 text-xs font-semibold text-emerald-600">
                      {product.stock} units available
                    </div>


                    {/* BUTTON */}

                    <button
                      onClick={() =>
                        addToCart(product)
                      }
                      disabled={product.stock <= 0}
                      className="mt-5 flex h-11 w-full items-center justify-center gap-2 bg-[#0b2035] text-sm font-bold text-white transition hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      <ShoppingCart size={17} />
                      Add to Cart
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

        )}

      </section>


      {/* ================= TRUST SECTION ================= */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">

          <div className="flex items-center gap-4 border-b border-slate-200 px-6 py-7 md:border-b-0 md:border-r md:px-8 lg:px-10">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-50 text-[#2563eb]">
              <ShieldCheck size={22} />
            </div>

            <div>
              <p className="font-bold text-[#0a1929]">
                Secure Shopping
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Safe and protected checkout
              </p>
            </div>

          </div>


          <div className="flex items-center gap-4 border-b border-slate-200 px-6 py-7 md:border-b-0 md:border-r md:px-8 lg:px-10">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-50 text-[#2563eb]">
              <PackageCheck size={22} />
            </div>

            <div>
              <p className="font-bold text-[#0a1929]">
                Quality Assured
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Carefully selected healthcare products
              </p>
            </div>

          </div>


          <div className="flex items-center gap-4 px-6 py-7 md:px-8 lg:px-10">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-50 text-[#2563eb]">
              <Truck size={22} />
            </div>

            <div>
              <p className="font-bold text-[#0a1929]">
                Fast Delivery
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Delivered right to your doorstep
              </p>
            </div>

          </div>

        </div>

      </section>


   

    </div>
  );
};

export default ProductPage;