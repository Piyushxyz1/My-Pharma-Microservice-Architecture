
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
  const { addToCart } = useCart();

  const filteredProducts = medicalProducts.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-[#f5f8fb] text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061827] text-white">

        {/* Background glow */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-20 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
                <HeartPulse className="w-4 h-4" />
                Trusted Medical Store
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-tight leading-[1.08] mt-7">
                Better care.
                <span className="block text-blue-400">
                  Better living.
                </span>
              </h1>

              <p className="text-slate-300 text-lg leading-8 mt-6 max-w-xl">
                Medicines, wellness products and everyday healthcare
                essentials — delivered conveniently to your doorstep.
              </p>

              {/* SEARCH */}

              <div className="relative max-w-xl mt-9">

                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search medicines, vitamins or healthcare..."
                  className="w-full h-14 bg-white text-slate-900 pl-13 pr-5 outline-none border border-white/10 shadow-2xl placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/50"
                />

              </div>

              <div className="flex flex-wrap items-center gap-4 mt-7">

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3.5 font-semibold transition"
                >
                  Shop Medicines
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Quality healthcare products
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -inset-4 border border-blue-400/10" />

              <div className="relative overflow-hidden bg-[#0c2439]">

                <img
                  src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80"
                  alt="Medical products"
                  className="w-full h-[390px] lg:h-[460px] object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061827]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="bg-[#061827]/90 backdrop-blur-md border border-white/10 p-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-xs uppercase tracking-widest text-blue-300">
                          Healthcare essentials
                        </p>

                        <p className="text-lg font-semibold mt-1">
                          Everything you need, in one place
                        </p>
                      </div>

                      <div className="hidden sm:flex w-11 h-11 items-center justify-center bg-blue-600">
                        <Pill className="w-5 h-5" />
                      </div>

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
      ====================================================== */}

      <section className="bg-white border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">

            {[
              {
                icon: ShieldCheck,
                title: "Quality Products",
                text: "Carefully selected",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                text: "At your doorstep",
              },
              {
                icon: Clock,
                title: "Easy Ordering",
                text: "Simple & convenient",
              },
              {
                icon: HeartPulse,
                title: "Health First",
                text: "Made for your care",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 px-4 sm:px-7 py-6 first:pl-0"
                >

                  <div className="shrink-0 w-11 h-11 bg-blue-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">
                      {item.title}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      {item.text}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
              Browse
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-2">
              Shop by category
            </h2>

            <p className="text-slate-500 mt-3 max-w-lg">
              Find the healthcare products you need quickly and easily.
            </p>

          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            View all products
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 mt-10">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <button
                key={category.name}
                onClick={() =>
                  handleCategory(category.name)
                }
                className="group bg-white p-6 sm:p-7 text-left hover:bg-[#f8fbff] transition"
              >

                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition">

                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition" />

                </div>

                <h3 className="font-semibold mt-6">
                  {category.name}
                </h3>

                <div className="flex items-center gap-1.5 text-sm text-blue-600 mt-3">

                  Browse

                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />

                </div>

              </button>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section
        id="products"
        className="bg-white border-y border-slate-200 py-20"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex justify-between items-end gap-5 mb-10">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
                Medical Store
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-2">
                Medicines & Healthcare
              </h2>

              <p className="text-slate-500 mt-3">
                Everyday essentials for your health and wellness.
              </p>

            </div>

            <Link
              to="/products"
              className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>


          {filteredProducts.length === 0 ? (

            <div className="text-center py-20 border border-slate-200">

              <Search className="w-10 h-10 mx-auto text-slate-300" />

              <h3 className="font-semibold text-lg mt-5">
                No products found
              </h3>

              <p className="text-slate-500 mt-2">
                Try another medicine or category.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {filteredProducts.slice(0,8).map((product) => (

                <div
                  key={product.id}
                  className="group bg-white border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition-all duration-300"
                >

                  {/* IMAGE */}

                  <Link
                    to={`/products/${product.id}`}
                    className="relative block h-60 bg-[#f3f6f9] overflow-hidden"
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 text-[10px] uppercase tracking-wider font-bold text-blue-600">
                      {product.category}
                    </div>

                  </Link>


                  {/* DETAILS */}

                  <div className="p-5">

                    <Link
                      to={`/products/${product.id}`}
                    >

                      <h3 className="font-semibold text-[16px] leading-6 hover:text-blue-600 transition">
                        {product.name}
                      </h3>

                    </Link>


                    <div className="flex items-center gap-2 mt-3">

                      <div className="flex items-center gap-1">

                        <Star className="w-4 h-4 text-amber-400 fill-current" />

                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>

                      </div>

                      <span className="w-1 h-1 bg-slate-300 rounded-full" />

                      <span className="text-xs text-slate-500">
                        {product.stock} available
                      </span>

                    </div>


                    <p className="text-sm text-slate-500 leading-6 mt-3 line-clamp-2 min-h-[48px]">
                      {product.description}
                    </p>


                    <div className="flex items-end justify-between mt-5">

                      <div>

                        <p className="text-xs text-slate-400 uppercase tracking-wide">
                          Price
                        </p>

                        <span className="text-xl font-bold text-slate-900">
                          ₹{product.price}
                        </span>

                      </div>

                    </div>


                    <button
                      onClick={() =>
                        addToCart(product)
                      }
                      className="w-full mt-5 flex items-center justify-center gap-2 bg-[#0a2035] hover:bg-blue-600 text-white py-3 font-semibold transition-colors duration-300"
                    >

                      <ShoppingCart className="w-4 h-4" />

                      Add to Cart

                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#061827] text-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">

          <div className="relative overflow-hidden border border-blue-400/10 bg-[#0a2035]">

            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-w-3xl mx-auto text-center px-6 py-16">

              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-blue-600">

                <Pill className="w-7 h-7" />

              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-6">
                Healthcare shopping,
                <span className="text-blue-400"> made simple.</span>
              </h2>

              <p className="text-slate-400 leading-7 mt-4 max-w-xl mx-auto">
                Browse our healthcare collection and find the products
                you need for your everyday wellness.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 font-semibold transition"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default HomePage;

