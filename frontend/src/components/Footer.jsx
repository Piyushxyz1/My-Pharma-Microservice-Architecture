import React from "react";
import {
  BoxesIcon,
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
  ClipboardListIcon,
  PackageCheckIcon,
  RefreshCwIcon,
  ChevronRightIcon,
  AwardIcon,
  BarChart3Icon,
  WarehouseIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick Links
  const quickLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Inventory", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Orders", path: "/orders" },
    { name: "Contact", path: "/contact" },
  ];

  // Warehouse Services
  const services = [
    { name: "Inventory Management", icon: BoxesIcon },
    { name: "Stock Monitoring", icon: BarChart3Icon },
    { name: "Purchase Orders", icon: ClipboardListIcon },
    { name: "Stock Receiving", icon: PackageCheckIcon },
    { name: "Stock Transfers", icon: RefreshCwIcon },
    { name: "Warehouse Operations", icon: WarehouseIcon },
  ];

  // Contact Information
  const contactInfo = [
    {
      icon: PhoneIcon,
      text: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MailIcon,
      text: "operations@warehouse.com",
      href: "mailto:operations@warehouse.com",
    },
    {
      icon: MapPinIcon,
      text: "Industrial Area, New Delhi, India",
      href: "#",
    },
    {
      icon: ClockIcon,
      text: "Mon - Sat · 9:00 AM - 7:00 PM",
      href: "#",
    },
  ];

  // Social Links
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
    <footer className="relative bg-[#061522] text-white border-t border-[#18334a] overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Operations Banner */}
        <div className="mb-12 pb-10 border-b border-[#18334a]">
          <div className="relative bg-[#0a1f32] border border-[#1b3b55] p-7 sm:p-8">

            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />

            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <WarehouseIcon className="w-5 h-5 text-blue-400" />

                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400">
                    Warehouse Operations
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Stay on top of your inventory
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                  Receive operational updates, stock alerts, inventory
                  insights, and warehouse management information directly
                  in your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-[#071a2d] border border-[#27445d] text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition-colors"
                />

                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors group">
                  Subscribe

                  <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-5">

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="relative">

                <BoxesIcon className="w-7 h-7 text-blue-400" />

                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 animate-pulse" />

              </div>

              <span className="font-bold font-mono text-xl tracking-tight text-white">
                WAREHOUSE
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              A centralized inventory management platform designed to
              help businesses track products, monitor stock levels,
              manage suppliers, and streamline warehouse operations.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 p-4 bg-[#0a1f32] border border-[#1b3b55]">

              <div className="w-9 h-9 flex items-center justify-center bg-blue-500/10">
                <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Secure Operations
                </p>

                <p className="text-xs text-slate-500 mt-0.5">
                  Reliable inventory management
                </p>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-base mb-5">
              Quick Links
            </h3>

            <div className="w-8 h-0.5 bg-blue-500 mb-5" />

            <ul className="space-y-3">

              {quickLinks.map((link, index) => (
                <li key={index}>

                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >

                    <ChevronRightIcon className="w-3 h-3 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />

                    {link.name}

                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* Services */}
          <div>

            <h3 className="font-semibold text-base mb-5">
              Warehouse Services
            </h3>

            <div className="w-8 h-0.5 bg-blue-500 mb-5" />

            <ul className="space-y-3">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <li key={index}>

                    <Link
                      to="#"
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-3 group"
                    >

                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:scale-110 transition-all" />

                      {service.name}

                    </Link>

                  </li>
                );
              })}

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="font-semibold text-base mb-5">
              Operations Contact
            </h3>

            <div className="w-8 h-0.5 bg-blue-500 mb-5" />

            <ul className="space-y-4">

              {contactInfo.map((info, index) => {
                const Icon = info.icon;

                return (
                  <li key={index}>

                    <a
                      href={info.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-start gap-3 group"
                    >

                      <Icon className="w-4 h-4 mt-0.5 text-slate-500 group-hover:text-blue-400 flex-shrink-0 transition-colors" />

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

        {/* Social + Operations */}
        <div className="py-7 border-t border-[#18334a]">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Social */}
            <div className="flex gap-3">

              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 border border-[#27445d] bg-[#0a1f32] flex items-center justify-center text-slate-500 ${social.color} hover:border-blue-500 hover:-translate-y-1 transition-all duration-200`}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}

            </div>

            {/* Operational Features */}
            <div className="flex flex-wrap justify-center gap-5">

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <TruckIcon className="w-4 h-4 text-blue-400" />
                <span>Stock Dispatch</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <PackageCheckIcon className="w-4 h-4 text-blue-400" />
                <span>Verified Inventory</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheckIcon className="w-4 h-4 text-blue-400" />
                <span>Secure System</span>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#18334a]">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

            <p className="text-xs text-slate-600">

              © {currentYear} WAREHOUSE INVENTORY MANAGEMENT.
              All rights reserved.

              <span className="mx-2 text-slate-700">|</span>

              <Link
                to="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>

              <span className="mx-2 text-slate-700">|</span>

              <Link
                to="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>

            </p>

            <div className="flex items-center gap-5">

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>Secure Platform</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <AwardIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>Built for Operations</span>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Back To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 w-11 h-11 bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-200 z-50"
        aria-label="Back to top"
      >
        <ChevronRightIcon className="w-5 h-5 rotate-[-90deg]" />
      </button>

    </footer>
  );
};

export default Footer;