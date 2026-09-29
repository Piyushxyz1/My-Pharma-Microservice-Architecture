import React from "react";
import {
  ShieldCheckIcon,
  TruckIcon,
  ClockIcon,
  HeartIcon,
  TargetIcon,
  LightbulbIcon,
  GlobeIcon,
  AwardIcon,
  PackageCheckIcon,
  DumbbellIcon,
  ActivityIcon,
  ClipboardListIcon,
  HeartPulseIcon,
  BarChart3Icon,
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: HeartIcon,
      title: "Health First",
      description:
        "We put health and wellbeing at the center of everything we build, making everyday wellness easier to access and manage.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Trusted Products",
      description:
        "We focus on providing reliable healthcare, fitness, and wellness products through a secure and dependable platform.",
    },
    {
      icon: TargetIcon,
      title: "Wellness Focused",
      description:
        "From everyday healthcare essentials to fitness products, we aim to support healthier daily routines.",
    },
    {
      icon: LightbulbIcon,
      title: "Continuous Improvement",
      description:
        "We continuously improve our platform to make discovering, purchasing, and managing wellness products simpler.",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "The Idea",
      description:
        "Started with a vision to make everyday healthcare and wellness products easier to discover.",
    },
    {
      year: "2023",
      title: "Health Store",
      description:
        "Introduced a centralized platform for medicines, healthcare essentials, and wellness products.",
    },
    {
      year: "2024",
      title: "Fitness & Wellness",
      description:
        "Expanded the platform with fitness, nutrition, personal care, and lifestyle products.",
    },
    {
      year: "2025",
      title: "Better Shopping Experience",
      description:
        "Improved product discovery, categories, ordering, and customer experience across the platform.",
    },
    {
      year: "2026",
      title: "Building the Future",
      description:
        "Continuing to build a modern digital destination for everyday health and wellness.",
    },
  ];

  const capabilities = [
    {
      icon: HeartPulseIcon,
      title: "Healthcare Essentials",
      description:
        "Discover everyday medicines, first-aid products, personal care essentials, and healthcare supplies.",
    },
    {
      icon: DumbbellIcon,
      title: "Fitness Products",
      description:
        "Explore products designed to support workouts, active lifestyles, recovery, and everyday fitness.",
    },
    {
      icon: ActivityIcon,
      title: "Wellness Collection",
      description:
        "Find vitamins, wellness products, personal care essentials, and products that support healthier routines.",
    },
    {
      icon: PackageCheckIcon,
      title: "Easy Ordering",
      description:
        "Browse products, manage your cart, place orders, and track your purchases through one simple platform.",
    },
  ];

  const stats = [
    { value: "500+", label: "Health Products" },
    { value: "50+", label: "Wellness Categories" },
    { value: "10K+", label: "Orders Served" },
    { value: "24/7", label: "Online Access" },
  ];

  return (
    <div className="min-h-screen bg-[#071a2d] text-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-[#18334a]">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-3xl" />

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-3xl" />

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

          <div className="max-w-4xl">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                <HeartPulseIcon className="w-5 h-5 text-blue-400" />
              </div>

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-400">
                About Our Platform
              </span>

            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-7">
              Better Health
              <span className="block text-blue-400">
                Better Everyday
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
              A modern health and wellness platform built to make healthcare,
              fitness, personal care, and everyday wellness products easier
              to discover and access.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                to="/products"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 transition-colors group"
              >
                Explore Products
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-[#31506a] hover:border-blue-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STORY ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase tracking-wider mb-5">
              <span className="w-8 h-px bg-blue-500" />
              Our Story
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Built Around
              <span className="text-blue-400">
                {" "}Health & Wellness
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-5">
              Taking care of your health involves more than just visiting a
              doctor. Everyday choices, physical activity, nutrition, personal
              care, and access to essential healthcare products all play an
              important role in a healthy lifestyle.
            </p>

            <p className="text-slate-400 leading-relaxed mb-5">
              Our platform brings healthcare, fitness, wellness, and personal
              care products together in one convenient digital store. Whether
              you are looking for everyday healthcare essentials or products
              that support an active lifestyle, everything is easier to
              discover in one place.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Our goal is simple: make everyday health and wellness shopping
              convenient, reliable, and accessible while encouraging people
              to take a more active approach to their wellbeing.
            </p>

          </div>


          <div className="relative">

            <div className="relative border border-[#1d3b53] bg-[#0a2035] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
                alt="Fitness and wellness"
                className="w-full h-[420px] object-cover opacity-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061522] via-[#061522]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <HeartPulseIcon className="w-6 h-6 text-blue-400" />
                  </div>

                  <div>

                    <p className="font-semibold text-lg">
                      Your Everyday Wellness Partner
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      Healthcare, fitness and wellness products in one place.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION / VISION ================= */}

      <section className="border-y border-[#18334a] bg-[#0a1f32] py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-[#23435b] bg-[#071a2d] p-8 md:p-10">

              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-7">
                <TargetIcon className="w-6 h-6 text-blue-400" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-3">
                Our Mission
              </p>

              <h3 className="text-2xl font-bold mb-4">
                Make Wellness More Accessible
              </h3>

              <p className="text-slate-400 leading-relaxed">
                To make everyday healthcare, fitness, and wellness products
                easier to discover and access through a convenient and
                reliable digital shopping experience.
              </p>

            </div>


            <div className="border border-[#23435b] bg-[#071a2d] p-8 md:p-10">

              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-7">
                <GlobeIcon className="w-6 h-6 text-blue-400" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-3">
                Our Vision
              </p>

              <h3 className="text-2xl font-bold mb-4">
                A Healthier Digital Lifestyle
              </h3>

              <p className="text-slate-400 leading-relaxed">
                To build a trusted digital destination where healthcare,
                fitness, nutrition, and personal wellness come together to
                support healthier everyday lifestyles.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CORE VALUES ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="mb-12">

          <div className="flex items-center gap-3 text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-blue-500" />
            What We Stand For
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Our Core Principles
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl">
            The principles that guide how we build our health and wellness
            platform.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#23435b] border border-[#23435b]">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (
              <div
                key={index}
                className="bg-[#071a2d] p-7 hover:bg-[#0a2035] transition-colors"
              >

                <Icon className="w-7 h-7 text-blue-400 mb-6" />

                <h3 className="text-lg font-semibold mb-3">
                  {value.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {value.description}
                </p>

              </div>
            );

          })}

        </div>

      </section>


      {/* ================= CAPABILITIES ================= */}

      <section className="bg-[#0a1f32] border-y border-[#18334a] py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-3">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Everything for Your Wellness Journey
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mt-4">
              Explore products across healthcare, fitness, personal care,
              and everyday wellness from one convenient platform.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {capabilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border border-[#23435b] bg-[#071a2d] p-7 hover:border-blue-500/50 transition-colors"
                >

                  <div className="w-11 h-11 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>

                  <h3 className="font-semibold text-lg mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>
      </section>


      {/* ================= WHY US ================= */}

      <section className="relative overflow-hidden py-20">

        <div className="absolute inset-0 bg-blue-600/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                Wellness Experience
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Designed for
                <span className="text-blue-400">
                  {" "}Healthier Living
                </span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-8">
                A healthier lifestyle is built through everyday habits.
                We make it easier to access products that support healthcare,
                fitness, recovery, nutrition, and personal wellbeing.
              </p>

              <div className="space-y-4">

                {[
                  "Healthcare essentials in one place",
                  "Fitness and active lifestyle products",
                  "Wellness and nutrition categories",
                  "Personal care essentials",
                  "Simple product discovery",
                  "Convenient online ordering",
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


            <div className="border border-[#23435b] bg-[#0a2035] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"
                alt="Healthy active lifestyle"
                className="w-full h-[390px] object-cover opacity-80"
              />

              <div className="p-7">

                <div className="flex items-center gap-3">

                  <ActivityIcon className="w-6 h-6 text-blue-400" />

                  <div>

                    <p className="font-semibold">
                      Active Living
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      Supporting healthier everyday routines.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= JOURNEY ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="mb-12">

          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-3">
            Our Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Growing With Our Community
          </h2>

          <p className="text-slate-400 mt-3 max-w-2xl">
            Our journey toward creating a more convenient health and wellness
            shopping experience.
          </p>

        </div>


        <div className="relative">

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#23435b]" />

          <div className="space-y-10">

            {milestones.map((milestone, index) => (

              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                <div className="hidden md:block flex-1" />

                <div className="absolute md:relative left-0 md:left-auto z-10 w-9 h-9 bg-[#071a2d] border border-blue-500 flex items-center justify-center">

                  <CheckCircleIcon className="w-4 h-4 text-blue-400" />

                </div>


                <div className="flex-1 pl-14 md:pl-0">

                  <div className="border border-[#23435b] bg-[#0a2035] p-6 hover:border-blue-500/40 transition-colors">

                    <span className="text-blue-400 font-bold text-xl">
                      {milestone.year}
                    </span>

                    <h3 className="text-lg font-semibold mt-2 mb-2">
                      {milestone.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {milestone.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="border-y border-[#18334a] bg-[#0a1f32]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#23435b]">

            {stats.map((stat, index) => (

              <div
                key={index}
                className="py-10 text-center"
              >

                <div className="text-3xl md:text-4xl font-bold text-blue-400">
                  {stat.value}
                </div>

                <p className="text-xs md:text-sm text-slate-500 mt-2">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT CTA ================= */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="border border-[#23435b] bg-[#0a2035] p-8 md:p-12 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                  Start Your Wellness Journey
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Make your health a priority.
                </h2>

                <p className="text-slate-400 leading-relaxed">
                  Explore healthcare, fitness, and wellness products designed
                  to support your everyday lifestyle.
                </p>

              </div>


              <div className="flex flex-wrap md:justify-end gap-3">

                <Link
                  to="/products"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-semibold text-sm flex items-center gap-2 transition-colors group"
                >
                  Explore Products
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3 border border-[#31506a] hover:border-blue-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
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

export default AboutUs;