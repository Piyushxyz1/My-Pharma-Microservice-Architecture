
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  WarehouseIcon,
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { toast } from "react-toastify";
import AUTH_API from "../../config/api"

const Signup = () => {
const API = AUTH_API.GATEWAY_API

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Unable to create account");
        return;
      }

      toast.success("Account created successfully");

      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Unable to connect to authentication service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#061522] text-white flex">

      {/* ================= LEFT ================= */}
      <div className="hidden lg:flex lg:w-[46%] relative overflow-hidden border-r border-white/[0.06]">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative z-10 p-12 xl:p-16 flex flex-col justify-between w-full">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 w-fit">

            <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/30">
              <WarehouseIcon
                className="w-5 h-5 text-blue-400"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <div className="font-semibold tracking-[0.12em] text-lg">
                WAREHOUSE<span className="text-blue-400">-OS</span>
              </div>

              <div className="text-[9px] text-slate-500 tracking-[0.25em] uppercase mt-1">
                Inventory Management System
              </div>
            </div>

          </Link>

          {/* Main Content */}
          <div className="max-w-lg">

            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-blue-500" />

              <span className="text-blue-400 text-xs tracking-[0.2em]">
                GET STARTED
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-semibold leading-[1.1]">
              One account.
              <br />
              <span className="text-blue-400">
                Complete control.
              </span>
            </h1>

            <p className="mt-6 text-slate-400 leading-7 max-w-md">
              Create your account to manage warehouse inventory, monitor
              stock levels, track operations and keep your workflow organized.
            </p>

            <div className="mt-10 border-l-2 border-blue-500/40 pl-5">
              <p className="text-sm text-slate-400 leading-6">
                Your account provides secure access to the warehouse
                management workspace.
              </p>
            </div>

          </div>

          {/* Bottom */}
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} Warehouse OS
          </div>

        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex-1 flex items-center justify-center px-5 py-10 sm:px-8">

        <div className="w-full max-w-md">

          {/* Mobile Brand */}
          <div className="lg:hidden flex justify-center mb-9">

            <Link to="/" className="flex items-center gap-3">

              <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/30">
                <WarehouseIcon
                  className="w-5 h-5 text-blue-400"
                  strokeWidth={1.8}
                />
              </div>

              <div className="font-semibold tracking-[0.12em]">
                WAREHOUSE<span className="text-blue-400">-OS</span>
              </div>

            </Link>

          </div>

          {/* Heading */}
          <div className="mb-7">

            <p className="text-blue-400 text-xs font-medium tracking-[0.18em] uppercase mb-3">
              New account
            </p>

            <h2 className="text-3xl font-semibold tracking-tight">
              Create your account
            </h2>

            <p className="text-sm text-slate-500 mt-3">
              Set up your account to access warehouse operations.
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>

              <label className="block text-xs font-medium text-slate-400 mb-2">
                FULL NAME
              </label>

              <div className="relative">

                <UserIcon
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600"
                  strokeWidth={1.8}
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="
                    w-full h-11
                    pl-10 pr-4
                    bg-[#0b2035]
                    border border-white/[0.08]
                    text-sm text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-blue-500/60
                    transition-all
                  "
                />

              </div>
            </div>

            {/* Email */}
            <div>

              <label className="block text-xs font-medium text-slate-400 mb-2">
                EMAIL ADDRESS
              </label>

              <div className="relative">

                <MailIcon
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600"
                  strokeWidth={1.8}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="
                    w-full h-11
                    pl-10 pr-4
                    bg-[#0b2035]
                    border border-white/[0.08]
                    text-sm text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-blue-500/60
                    transition-all
                  "
                />

              </div>
            </div>

            {/* Password */}
            <div>

              <label className="block text-xs font-medium text-slate-400 mb-2">
                PASSWORD
              </label>

              <div className="relative">

                <LockIcon
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600"
                  strokeWidth={1.8}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  className="
                    w-full h-11
                    pl-10 pr-11
                    bg-[#0b2035]
                    border border-white/[0.08]
                    text-sm text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-blue-500/60
                    transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute right-3.5 top-1/2
                    -translate-y-1/2
                    text-slate-600
                    hover:text-slate-300
                  "
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>

              </div>
            </div>

            {/* Confirm Password */}
            <div>

              <label className="block text-xs font-medium text-slate-400 mb-2">
                CONFIRM PASSWORD
              </label>

              <div className="relative">

                <LockIcon
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600"
                  strokeWidth={1.8}
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="
                    w-full h-11
                    pl-10 pr-11
                    bg-[#0b2035]
                    border border-white/[0.08]
                    text-sm text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-blue-500/60
                    transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="
                    absolute right-3.5 top-1/2
                    -translate-y-1/2
                    text-slate-600
                    hover:text-slate-300
                  "
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>

              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 pt-2 cursor-pointer">

              <input
                type="checkbox"
                required
                className="
                  mt-0.5
                  w-4 h-4
                  accent-blue-600
                  shrink-0
                "
              />

              <span className="text-xs text-slate-500 leading-5">
                I agree to the{" "}
                <span className="text-slate-300">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-slate-300">
                  Privacy Policy
                </span>
                .
              </span>

            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full h-12
                mt-3
                flex items-center justify-center gap-2
                bg-blue-600
                hover:bg-blue-500
                disabled:bg-blue-800
                disabled:cursor-not-allowed
                text-white
                text-sm font-medium
                transition-all duration-200
              "
            >
              {loading ? "Creating account..." : "Create Account"}

              {!loading && (
                <ArrowRightIcon className="w-4 h-4" />
              )}
            </button>

          </form>

          {/* Login */}
          <div className="mt-7 pt-6 border-t border-white/[0.07] text-center">

            <p className="text-sm text-slate-500">
              Already have an account?{" "}

              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign in
              </Link>
            </p>

          </div>

          {/* Security */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-600">

            <ShieldCheckIcon className="w-3.5 h-3.5" />

            Secure account creation

          </div>

        </div>
      </div>

    </div>
  );
};

export default Signup;

