import React from "react";
import {
  HeartPulseIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
  PillIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserCircleIcon,
  ChevronRightIcon,
  AwardIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ================================
  // QUICK LINKS
  // ================================
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/product-list" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "My Account", path: "/account" },
    { name: "My Orders", path: "/orders" },
  ];

  // ================================
  // HEALTHCARE SERVICES
  // ================================
  const services = [
    {
      name: "Medicines & Healthcare",
      icon: PillIcon,
      path: "/product-list",
    },
    {
      name: "Wellness Products",
      icon: HeartPulseIcon,
      path: "/product-list",
    },
    {
      name: "First Aid Essentials",
      icon: ShieldCheckIcon,
      path: "/product-list",
    },
    {
      name: "Fitness Nutrition",
      icon: ShoppingBagIcon,
      path: "/product-list",
    },
    {
      name: "Health Devices",
      icon: HeartPulseIcon,
      path: "/product-list",
    },
    {
      name: "Personal Care",
      icon: HeartIcon,
      path: "/product-list",
    },
  ];

  // ================================
  // CONTACT INFORMATION
  // ================================
  const contactInfo = [
    {
      icon: PhoneIcon,
      text: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MailIcon,
      text: "care@medicalstore.com",
      href: "mailto:care@medicalstore.com",
    },
    {
      icon: MapPinIcon,
      text: "New Delhi, India",
      href: "#",
    },
    {
      icon: ClockIcon,
      text: "Mon - Sat · 9:00 AM - 7:00 PM",
      href: "#",
    },
  ];

  // ================================
  // SOCIAL LINKS
  // ================================
  const socialLinks = [
    {
      icon: FacebookIcon,
      name: "Facebook",
      href: "https://facebook.com",
      color: "hover:text-[#1877f2]",
    },
    {
      icon: TwitterIcon,
      name: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-[#1da1f2]",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      href: "https://instagram.com",
      color: "hover:text-[#e4405f]",
    },
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-[#0077b5]",
    },
    {
      icon: YoutubeIcon,
      name: "YouTube",
      href: "https://youtube.com",
      color: "hover:text-[#ff0000]",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#18334a] bg-[#061522] text-white">

      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">

        {/* =====================================================
            HEALTHCARE NEWSLETTER BANNER
        ===================================================== */}
        <div className="mb-12 border-b border-[#18334a] pb-10">

          <div className="relative overflow-hidden border border-[#1b3b55] bg-[#0a1f32] p-7 sm:p-8">

            {/* Accent */}
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-blue-500" />

            <div className="grid items-center gap-8 md:grid-cols-2">

              {/* Content */}
              <div>

                <div className="mb-3 flex items-center gap-2">
                  <HeartPulseIcon className="h-5 w-5 text-blue-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Healthcare & Wellness
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Stay informed about your health
                </h3>

                <p className="max-w-xl text-sm leading-relaxed text-slate-400">
                  Get useful healthcare updates, wellness tips, product
                  information and special offers delivered straight to
                  your inbox.
                </p>

              </div>

            

            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* =================================================
              BRAND
          ================================================= */}
          <div className="space-y-5">

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative">

                <HeartPulseIcon className="h-7 w-7 text-blue-400" />

                <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse bg-blue-400" />

              </div>

              <div>
                <span className="block font-mono text-xl font-bold tracking-tight text-white">
                  MY-PHARMA
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-blue-400">
                  Healthcare • Pharmacy
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted destination for medicines, wellness products
              and everyday healthcare essentials. Simple, reliable and
              convenient healthcare shopping.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 border border-[#1b3b55] bg-[#0a1f32] p-4">

              <div className="flex h-9 w-9 items-center justify-center bg-blue-500/10">
                <ShieldCheckIcon className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Trusted Healthcare
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Quality products & secure ordering
                </p>
              </div>

            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <div>

            <h3 className="mb-5 text-base font-semibold">
              Quick Links
            </h3>

         

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
                  >
                    <ChevronRightIcon className="h-3 w-3 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-blue-400" />

                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              HEALTHCARE SERVICES
          ================================================= */}
          <div>

            <h3 className="mb-5 text-base font-semibold">
              Healthcare Services
            </h3>

         

            <ul className="space-y-3">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <li key={service.name}>

                    <Link
                      to={service.path}
                      className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
                    >

                      <Icon className="h-4 w-4 text-slate-500 transition-all group-hover:scale-110 group-hover:text-blue-400" />

                      {service.name}

                    </Link>

                  </li>
                );
              })}

            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}
          <div>

            <h3 className="mb-5 text-base font-semibold">
              Contact & Support
            </h3>

         

            <ul className="space-y-4">

              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <li key={info.text}>

                    <a
                      href={info.href}
                      className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-blue-400"
                    >

                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-blue-400" />

                      <span className="leading-relaxed">
                        {info.text}
                      </span>

                    </a>

                  </li>
                );
              })}

            </ul>
          </div>
        </div>

        {/* =====================================================
            SOCIAL + BENEFITS
        ===================================================== */}
        <div className="border-t border-[#18334a] py-7">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* Social */}
            <div className="flex gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex h-9 w-9 items-center justify-center border border-[#27445d] bg-[#0a1f32] text-slate-500 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 ${social.color}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}

            </div>

            {/* Healthcare Features */}
            <div className="flex flex-wrap justify-center gap-5">

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <TruckIcon className="h-4 w-4 text-blue-400" />
                <span>Fast Delivery</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheckIcon className="h-4 w-4 text-blue-400" />
                <span>Trusted Products</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <HeartPulseIcon className="h-4 w-4 text-blue-400" />
                <span>Health First</span>
              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="border-t border-[#18334a] pt-6">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

            <p className="text-xs text-slate-600">

              © {currentYear} MY-PHARMA. All rights reserved.

              <span className="mx-2 text-slate-700">|</span>

              <Link
                to="/privacy"
                className="transition-colors hover:text-blue-400"
              >
                Privacy Policy
              </Link>

              <span className="mx-2 text-slate-700">|</span>

              <Link
                to="/terms"
                className="transition-colors hover:text-blue-400"
              >
                Terms of Service
              </Link>

            </p>

            <div className="flex items-center gap-5">

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheckIcon className="h-3.5 w-3.5 text-blue-400" />
                <span>Secure Shopping</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <AwardIcon className="h-3.5 w-3.5 text-blue-400" />
                <span>Quality Healthcare</span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center bg-blue-600 text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-500"
        aria-label="Back to top"
      >
        <ChevronRightIcon className="h-5 w-5 rotate-[-90deg]" />
      </button>
    </footer>
  );
};

export default Footer;