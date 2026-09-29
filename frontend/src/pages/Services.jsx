import React, { useState } from "react";
import {
  HeartPulseIcon,
  DumbbellIcon,
  PillIcon,
  ShoppingBagIcon,
  ActivityIcon,
  ShieldCheckIcon,
  RefreshCwIcon,
  SearchCheckIcon,
  AppleIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UsersIcon,
  HeartIcon,
  ScanBarcodeIcon,
  SparklesIcon,
  StethoscopeIcon,
  BadgeCheckIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const mainServices = [
    {
      id: "healthcare",
      icon: PillIcon,
      title: "Healthcare Essentials",
      description:
        "Find everyday healthcare products, medicines, first-aid essentials, and personal care items in one place.",
      fullDescription:
        "Access a structured collection of everyday healthcare essentials designed to make routine health shopping simpler. Browse products by category and discover commonly needed healthcare and personal care products.",
      benefits: [
        "Everyday healthcare products",
        "First-aid essentials",
        "Personal care products",
        "Easy category browsing",
        "Centralized product collection",
      ],
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "fitness",
      icon: DumbbellIcon,
      title: "Fitness & Active Living",
      description:
        "Explore products that support workouts, training, recovery, and an active everyday lifestyle.",
      fullDescription:
        "Build a more active lifestyle with fitness-focused products for workouts, training, exercise, and recovery. Discover equipment and essentials suitable for different fitness routines.",
      benefits: [
        "Workout essentials",
        "Fitness equipment",
        "Training products",
        "Recovery accessories",
        "Active lifestyle products",
      ],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "wellness",
      icon: HeartPulseIcon,
      title: "Wellness & Nutrition",
      description:
        "Discover wellness-focused products supporting nutrition, hydration, energy, and everyday wellbeing.",
      fullDescription:
        "Explore products focused on everyday wellness, nutrition, hydration, and healthy routines. The platform brings wellness categories together so customers can discover relevant products more easily.",
      benefits: [
        "Nutrition products",
        "Hydration essentials",
        "Wellness categories",
        "Healthy lifestyle products",
        "Easy product discovery",
      ],
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "personal-care",
      icon: SparklesIcon,
      title: "Personal Care",
      description:
        "Shop personal care and daily hygiene essentials designed for everyday health and wellbeing.",
      fullDescription:
        "Keep everyday personal care simple with products covering hygiene, skincare, grooming, and daily wellness routines. Browse essential products through an organized online shopping experience.",
      benefits: [
        "Daily hygiene essentials",
        "Skincare products",
        "Grooming essentials",
        "Personal wellness products",
        "Organized categories",
      ],
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "shopping",
      icon: ShoppingBagIcon,
      title: "Easy Health Shopping",
      description:
        "Discover healthcare, fitness, and wellness products through a simple and organized shopping experience.",
      fullDescription:
        "Browse products, explore categories, view product information, and add your essentials to the cart through a streamlined online shopping experience built around health and wellness.",
      benefits: [
        "Simple product discovery",
        "Organized categories",
        "Product details",
        "Shopping cart support",
        "Convenient online ordering",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "wellness-tracking",
      icon: ActivityIcon,
      title: "Active Lifestyle Support",
      description:
        "Bring fitness, wellness, and healthy lifestyle essentials together for your everyday routine.",
      fullDescription:
        "Create a more organized approach to your health and fitness shopping by keeping active lifestyle, wellness, nutrition, and healthcare essentials accessible through one platform.",
      benefits: [
        "Fitness essentials",
        "Wellness products",
        "Healthy lifestyle categories",
        "Recovery products",
        "One convenient platform",
      ],
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const additionalServices = [
    {
      icon: ScanBarcodeIcon,
      title: "Product Discovery",
      description:
        "Find healthcare, fitness, wellness, and personal care products through organized categories.",
    },
    {
      icon: HeartIcon,
      title: "Wellness Collection",
      description:
        "Explore products grouped around everyday health, fitness, nutrition, and wellbeing.",
    },
    {
      icon: DumbbellIcon,
      title: "Fitness Essentials",
      description:
        "Discover workout and active-lifestyle products for different fitness routines.",
    },
    {
      icon: SearchCheckIcon,
      title: "Easy Product Search",
      description:
        "Quickly search and explore products without navigating through complicated menus.",
    },
    {
      icon: RefreshCwIcon,
      title: "Fresh Product Collection",
      description:
        "Keep your shopping experience organized around relevant health and wellness categories.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Shopping",
      description:
        "Enjoy a structured shopping experience with secure account and order management.",
    },
  ];

  const workflow = [
    {
      number: "01",
      title: "Explore Products",
      description:
        "Browse healthcare, fitness, wellness, nutrition, and personal care products through organized categories.",
      icon: SearchCheckIcon,
    },
    {
      number: "02",
      title: "Choose Your Essentials",
      description:
        "View product information, compare available options, and add the products you need to your cart.",
      icon: ShoppingBagIcon,
    },
    {
      number: "03",
      title: "Complete Your Order",
      description:
        "Review your cart, provide your details, and complete your purchase through a simple checkout process.",
      icon: BadgeCheckIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-[#071a2d] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-[#18334a]">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-3xl" />

          <div className="absolute bottom-0 -left-32 w-[450px] h-[450px] bg-cyan-500/5 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

            <div>

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                  <HeartPulseIcon className="w-5 h-5 text-blue-400" />
                </div>

                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400">
                  Health & Wellness
                </span>

              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-7">
                Everything your
                <span className="block text-blue-400">
                  healthier lifestyle needs.
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Explore healthcare essentials, fitness products, wellness
                essentials, nutrition, and personal care products through one
                modern health and wellness platform.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/products"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2 transition-colors group"
                >
                  Explore Products
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 border border-[#31506a] hover:border-blue-500 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            {/* Hero System Panel */}
            <div className="relative hidden lg:block">

              <div className="border border-[#23435b] bg-[#0a2035] p-6">

                <div className="flex items-center justify-between pb-5 border-b border-[#23435b]">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Wellness Center
                    </p>

                    <p className="font-semibold mt-1">
                      Health Overview
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-blue-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    Platform Active
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-px bg-[#23435b] mt-6">

                  <div className="bg-[#071a2d] p-5">
                    <PillIcon className="w-5 h-5 text-blue-400 mb-4" />
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Health Products
                    </p>
                  </div>

                  <div className="bg-[#071a2d] p-5">
                    <DumbbellIcon className="w-5 h-5 text-blue-400 mb-4" />
                    <p className="text-2xl font-bold">50+</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Wellness Categories
                    </p>
                  </div>

                  <div className="bg-[#071a2d] p-5">
                    <ActivityIcon className="w-5 h-5 text-blue-400 mb-4" />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Online Access
                    </p>
                  </div>

                  <div className="bg-[#071a2d] p-5">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-400 mb-4" />
                    <p className="text-2xl font-bold">Secure</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Shopping
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN SERVICES
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

          <div>

            <div className="flex items-center gap-3 text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <span className="w-8 h-px bg-blue-500" />
              Core Services
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Health & Wellness Services
            </h2>

            <p className="text-slate-400 mt-4 max-w-2xl leading-relaxed">
              Everything you need to discover healthcare, fitness, wellness,
              nutrition, and personal care products through one platform.
            </p>

          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ClockIcon className="w-4 h-4 text-blue-400" />
            Built for everyday wellness
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#23435b] border border-[#23435b]">

          {mainServices.map((service) => {

            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`bg-[#071a2d] hover:bg-[#0a2035] transition-colors cursor-pointer ${
                  isActive ? "bg-[#0a2035]" : ""
                }`}
                onClick={() =>
                  setActiveService(isActive ? null : service.id)
                }
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover opacity-60 transition-transform duration-500 ${
                      isActive ? "scale-105" : ""
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d] via-[#071a2d]/30 to-transparent" />

                  <div className="absolute top-5 left-5 w-11 h-11 bg-[#071a2d]/90 border border-blue-500/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>

                </div>

                {/* Content */}
                <div className="p-7">

                  <div className="flex items-start justify-between gap-4">

                    <h3 className="text-xl font-semibold">
                      {service.title}
                    </h3>

                    <ArrowRightIcon
                      className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform ${
                        isActive ? "rotate-90" : ""
                      }`}
                    />

                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mt-3">
                    {service.description}
                  </p>

                  {isActive && (
                    <div className="mt-6 pt-6 border-t border-[#23435b]">

                      <p className="text-sm text-slate-400 leading-relaxed mb-5">
                        {service.fullDescription}
                      </p>

                      <div className="space-y-3">

                        {service.benefits.map((benefit, index) => (

                          <div
                            key={index}
                            className="flex items-center gap-3"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />

                            <span className="text-xs text-slate-300">
                              {benefit}
                            </span>
                          </div>

                        ))}

                      </div>

                      <Link
                        to="/products"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium mt-6 group"
                      >
                        Explore Products
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                    </div>
                  )}

                  {!isActive && (
                    <div className="flex items-center gap-2 text-xs text-blue-400 mt-6">
                      <span>View service details</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          HEALTH & WELLNESS FEATURES
      ===================================================== */}
      <section className="border-y border-[#18334a] bg-[#0a1f32] py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
              Why It Matters
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Built Around Better Living
            </h2>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Bring healthcare, fitness, wellness, and personal care essentials
              together so everyday health shopping stays simple and organized.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#23435b] border border-[#23435b]">

            {[
              {
                icon: HeartPulseIcon,
                title: "Health Essentials",
                text: "Discover everyday healthcare and personal care products from one place.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Trusted Shopping",
                text: "Keep your health shopping experience structured, secure, and convenient.",
              },
              {
                icon: DumbbellIcon,
                title: "Active Lifestyle",
                text: "Explore products that support workouts, training, recovery, and active living.",
              },
              {
                icon: RefreshCwIcon,
                title: "One Platform",
                text: "Bring healthcare, fitness, nutrition, and wellness shopping together.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-[#071a2d] p-7 hover:bg-[#0c243a] transition-colors"
                >

                  <Icon className="w-7 h-7 text-blue-400 mb-6" />

                  <h3 className="font-semibold text-lg mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          ADDITIONAL SERVICES
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="mb-12">

          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
            Additional Capabilities
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            More for Your Wellness Journey
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl">
            Supporting features that make discovering and shopping for health
            and wellness products easier.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {additionalServices.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group border border-[#23435b] bg-[#0a2035] p-6 hover:border-blue-500/50 hover:bg-[#0c243a] transition-all"
              >

                <div className="flex gap-5">

                  <div className="w-11 h-11 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-base mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {service.description}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="bg-[#0a1f32] border-y border-[#18334a] py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
              Simple Process
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              How It Works
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mt-4">
              A simple shopping experience designed around your everyday
              health and wellness needs.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#23435b] border border-[#23435b]">

            {workflow.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative bg-[#071a2d] p-8"
                >

                  <div className="flex items-center justify-between mb-8">

                    <span className="text-4xl font-bold text-[#18334a]">
                      {step.number}
                    </span>

                    <div className="w-11 h-11 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>

                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>

                  {index < workflow.length - 1 && (
                    <ArrowRightIcon className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-400 z-10 bg-[#0a1f32]" />
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          WELLNESS SNAPSHOT
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
              Wellness Snapshot
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Clearer Way to Explore
              <span className="text-blue-400"> Wellness</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-8">
              Instead of searching across disconnected stores and categories,
              bring healthcare, fitness, nutrition, wellness, and personal care
              essentials together in one organized shopping experience.
            </p>

            <div className="space-y-4">

              {[
                "Explore healthcare essentials",
                "Discover fitness products",
                "Browse wellness and nutrition",
                "Find personal care essentials",
                "Shop through a simple online experience",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />

                  <span className="text-sm text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="border border-[#23435b] bg-[#0a2035]">

            <div className="p-6 border-b border-[#23435b] flex items-center justify-between">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Wellness Categories
                </p>

                <h3 className="font-semibold mt-1">
                  Health & Fitness
                </h3>
              </div>

              <HeartPulseIcon className="w-6 h-6 text-blue-400" />

            </div>

            <div className="p-6 space-y-6">

              <div>

                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-400">
                    Healthcare Essentials
                  </span>

                  <span className="text-xs text-blue-400">
                    Available
                  </span>
                </div>

                <div className="h-1.5 bg-[#18334a]">
                  <div className="h-full bg-blue-500 w-[94%]" />
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-400">
                    Fitness Products
                  </span>

                  <span className="text-xs text-blue-400">
                    Available
                  </span>
                </div>

                <div className="h-1.5 bg-[#18334a]">
                  <div className="h-full bg-blue-500 w-[88%]" />
                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-400">
                    Wellness Collection
                  </span>

                  <span className="text-xs text-blue-400">
                    Available
                  </span>
                </div>

                <div className="h-1.5 bg-[#18334a]">
                  <div className="h-full bg-blue-500 w-[81%]" />
                </div>

              </div>

              <div className="pt-5 border-t border-[#23435b] flex items-center gap-3">

                <HeartIcon className="w-4 h-4 text-blue-400" />

                <span className="text-xs text-slate-500">
                  Your everyday health & wellness platform
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="border-t border-[#18334a] py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative border border-[#23435b] bg-[#0a2035] p-8 md:p-12 overflow-hidden">

            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl pointer-events-none" />

            <div className="relative text-center">

              <div className="w-12 h-12 mx-auto bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <HeartPulseIcon className="w-6 h-6 text-blue-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start your wellness journey
              </h2>

              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
                Explore healthcare, fitness, wellness, nutrition, and personal
                care products designed to support your everyday lifestyle.
              </p>

              <div className="flex flex-wrap justify-center gap-3">

                <Link
                  to="/products"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-sm font-semibold flex items-center gap-2 transition-colors group"
                >
                  Explore Products
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 border border-[#31506a] hover:border-blue-500 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;