
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  HeartPulseIcon,
} from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import AUTH_API from "../../config/api";

const Login = () => {
  const API = AUTH_API.GATEWAY_API;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Unable to login");
        return;
      }

      dispatch(login(data));

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Unable to connect to authentication service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#061522] text-white flex ">

      {/* ================= LEFT PANEL ================= */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden border-r border-white/[0.06]">

        {/* Subtle grid */}
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

        <div className="relative z-10 flex flex-col justify-between w-full p-12 xl:p-16">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 w-fit">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/30">
              <HeartPulseIcon
                className="w-5 h-5 text-blue-400"
                strokeWidth={1.8}
              />
            </div>

            <div>
              <div className="font-semibold tracking-[0.12em] text-lg">
                Health • Wellness • Care
              </div>
            </div>
          </Link>

          {/* Main Content */}
          <div className="max-w-xl">

            <div className="flex items-center gap-2 mb-6">

              <span className="text-blue-400 text-xs tracking-[0.2em] font-medium">
                HEALTHCARE & PHARMACY
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-semibold leading-[1.1] tracking-tight">
              Your health,
              <br />
              <span className="text-blue-400">our priority.</span>
            </h1>

            <p className="mt-6 text-slate-400 leading-7 max-w-lg">
              Discover trusted healthcare products, manage your medicines
              and take care of your everyday wellness from one secure place.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">

              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-blue-500/10 border border-blue-500/20">
                  <ShieldCheckIcon
                    className="w-4 h-4 text-blue-400"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white">
                    Secure & Trusted
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    Secure access to your healthcare account and information.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-blue-500/10 border border-blue-500/20">
                  <HeartPulseIcon
                    className="w-4 h-4 text-blue-400"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white">
                    Healthcare & Wellness
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    Explore medicines, wellness products and everyday healthcare essentials.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom */}
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} Healthcare Care
          </div>

        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="flex-1 flex items-center justify-center px-5 py-10 sm:px-8">

        <div className="w-full max-w-md">

          {/* Mobile Brand */}
          <div className="lg:hidden flex justify-center mb-10">
            <Link to="/" className="flex items-center gap-3">

              <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/30">
                <HeartPulseIcon
                  className="w-5 h-5 text-blue-400"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <div className="font-semibold tracking-[0.12em]">
                  HEALTHCARE
                  <span className="text-blue-400">-CARE</span>
                </div>

                <div className="text-[9px] text-slate-500 tracking-[0.25em] uppercase mt-1">
                  Health • Wellness • Care
                </div>
              </div>

            </Link>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <p className="text-blue-400 text-xs font-medium tracking-[0.18em] uppercase mb-3">
              Welcome back
            </p>

            <h2 className="text-3xl font-semibold tracking-tight">
              Sign in to your account
            </h2>

            <p className="text-sm text-slate-500 mt-3">
              Access your healthcare account and explore products for your everyday wellness.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

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
                    w-full h-12
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
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-slate-400">
                  PASSWORD
                </label>

                <button
                  type="button"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

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
                  placeholder="Enter your password"
                  required
                  className="
                    w-full h-12
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
                    transition-colors
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full h-12
                flex items-center justify-center gap-2
                bg-blue-600
                hover:bg-blue-500
                disabled:bg-blue-800
                disabled:cursor-not-allowed
                text-white
                text-sm font-medium
                transition-all duration-200
                mt-7
              "
            >
              {loading ? "Signing in..." : "Sign In"}

              {!loading && <ArrowRightIcon className="w-4 h-4" />}
            </button>
          </form>

          {/* Signup */}
          <div className="mt-8 pt-6 border-t border-white/[0.07] text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;

