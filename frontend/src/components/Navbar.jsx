import React, { useState, useEffect, useRef } from "react";

import {
  ShoppingCartIcon,
  ShoppingBagIcon,
  MenuIcon,
  XIcon,
  UserIcon,
  SearchIcon,
  HeartIcon,
  HomeIcon,
  PillIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  LogOutIcon,
  PackageIcon,
  LogInIcon,
} from "lucide-react";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import useCart from "./hooks/useCart";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Desktop account dropdown
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Mobile account section
  const [isMobileAccountOpen, setIsMobileAccountOpen] = useState(false);

  const accountRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";

  // Cart should NOT appear on login/signup
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup";

  const isHomePage = pathname === "/";

  const username = useSelector(
    (state) => state.auth.user
  );

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const { cartItems } = useCart();

  const navLinks = [
    {
      path: "/",
      label: "Home",
      icon: HomeIcon,
    },
    {
      path: "/about",
      label: "About Us",
      icon: ShoppingBagIcon,
    },
    {
      path: "/services",
      label: "Services",
      icon: PillIcon,
    },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Desktop account outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsAccountOpen(false);
        setIsMobileAccountOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // Search
  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(
        `/search?q=${encodeURIComponent(
          searchQuery.trim()
        )}`
      );

      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  // Logout
  const handleLogout = () => {
    dispatch(logout());

    // Remove old username if it exists
    localStorage.removeItem("username");

    setIsAccountOpen(false);
    setIsMobileAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/");
  };

  // Login
  const handleLogin = () => {
    setIsAccountOpen(false);
    setIsMobileAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/login");
  };

  // Orders
  const handleOrders = () => {
    setIsAccountOpen(false);
    setIsMobileAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/orders");
  };

  // Mobile menu close
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileAccountOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#071a2d]/95 backdrop-blur-md shadow-lg"
          : "bg-[#071a2d]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <PillIcon
                size={22}
                className="text-white"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg leading-none">
                My Pharma
              </h1>

              <p className="text-blue-300 text-[10px] tracking-wider mt-1">
                HEALTHCARE • PHARMACY
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={17} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ================= DESKTOP SEARCH ================= */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-6"
          >
            <div className="relative w-full">
              <SearchIcon
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search medicines..."
                className="w-full bg-white/10 border border-white/10 text-white placeholder:text-slate-400 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white/15"
              />
            </div>
          </form>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2">

            {/* Wishlist - Home only */}
            {isHomePage && (
              <Link
                to="/wishlist"
                className="hidden sm:flex relative w-10 h-10 items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                <HeartIcon size={20} />
              </Link>
            )}

            {/* Cart - hidden on login/signup */}
            {!isAuthPage && (
              <Link
                to="/cart"
                className="relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
              >
                <ShoppingCartIcon size={21} />

                {cartItems?.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            )}

            {/* ================= DESKTOP ACCOUNT ================= */}
            {!isAuthPage && (
              <div
                ref={accountRef}
                className="hidden lg:block relative"
              >
                <button
                  onClick={() =>
                    setIsAccountOpen(
                      !isAccountOpen
                    )
                  }
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <UserIcon size={17} />
                  </div>

                  <div className="hidden xl:block text-left">
                    <p className="text-xs text-slate-400">
                      {isAuthenticated
                        ? "Signed in as"
                        : "Account"}
                    </p>

                    <p className="text-sm text-white font-medium max-w-[100px] truncate">
                      {isAuthenticated
                        ? username || "User"
                        : "Login"}
                    </p>
                  </div>

                  <ChevronDownIcon
                    size={16}
                    className={`transition-transform ${
                      isAccountOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* Desktop dropdown */}
                {isAccountOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">

                    {isAuthenticated ? (
                      <>
                        <div className="px-4 py-3 bg-slate-50 border-b">
                          <p className="text-xs text-slate-500">
                            Signed in as
                          </p>

                          <p className="text-sm font-semibold text-slate-800 truncate">
                            {username || "User"}
                          </p>
                        </div>

                        <button
                          onClick={handleOrders}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition"
                        >
                          <PackageIcon
                            size={18}
                          />

                          My Orders

                          <ChevronRightIcon
                            size={16}
                            className="ml-auto"
                          />
                        </button>

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
                        >
                          <LogOutIcon
                            size={18}
                          />

                          Logout
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={handleLogin}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition"
                      >
                        <LogInIcon
                          size={18}
                        />

                        Login

                        <ChevronRightIcon
                          size={16}
                          className="ml-auto"
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ================= MOBILE HAMBURGER ================= */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);

                if (isMenuOpen) {
                  setIsMobileAccountOpen(false);
                }
              }}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon size={23} />
              ) : (
                <MenuIcon size={23} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">

            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="mb-4"
            >
              <div className="relative">
                <SearchIcon
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(
                      e.target.value
                    )
                  }
                  placeholder="Search medicines..."
                  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-slate-400 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive =
                  pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={19} />
                    {link.label}

                    <ChevronRightIcon
                      size={16}
                      className="ml-auto"
                    />
                  </Link>
                );
              })}
            </div>

            {/* ================= MOBILE ACCOUNT ================= */}
            {!isAuthPage && (
              <div className="mt-4 border-t border-white/10 pt-4">

                {/* Account Toggle */}
                <button
                  onClick={() =>
                    setIsMobileAccountOpen(
                      !isMobileAccountOpen
                    )
                  }
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <UserIcon size={18} />
                  </div>

                  <div className="text-left flex-1">
                    <p className="text-xs text-slate-400">
                      {isAuthenticated
                        ? "Signed in as"
                        : "Account"}
                    </p>

                    <p className="text-sm text-white font-medium truncate">
                      {isAuthenticated
                        ? username || "User"
                        : "Login"}
                    </p>
                  </div>

                  <ChevronDownIcon
                    size={18}
                    className={`transition-transform ${
                      isMobileAccountOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* Account Content */}
                {isMobileAccountOpen && (
                  <div className="mt-2 ml-12 mr-2 space-y-1">

                    {isAuthenticated ? (
                      <>
                        {/* My Orders */}
                        <button
                          onClick={handleOrders}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition text-left"
                        >
                          <PackageIcon
                            size={18}
                          />

                          <span>
                            My Orders
                          </span>

                          <ChevronRightIcon
                            size={16}
                            className="ml-auto"
                          />
                        </button>

                        {/* Logout */}
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition text-left"
                        >
                          <LogOutIcon
                            size={18}
                          />

                          <span>
                            Logout
                          </span>
                        </button>
                      </>
                    ) : (
                      /* Login */
                      <button
                        onClick={handleLogin}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-400 hover:bg-blue-500/10 transition text-left"
                      >
                        <LogInIcon
                          size={18}
                        />

                        <span>
                          Login
                        </span>

                        <ChevronRightIcon
                          size={16}
                          className="ml-auto"
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;