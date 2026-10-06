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

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileAccountOpen, setIsMobileAccountOpen] =
    useState(false);

  const accountRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();

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

  /* =====================================================
     SCROLL
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     DESKTOP ACCOUNT - OUTSIDE CLICK
  ===================================================== */

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

  /* =====================================================
     ESCAPE
  ===================================================== */

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

  /* =====================================================
     LOGOUT
  ===================================================== */

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("username");

    setIsAccountOpen(false);
    setIsMobileAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/");
  };

  /* =====================================================
     LOGIN
  ===================================================== */

  const handleLogin = () => {
    setIsAccountOpen(false);
    setIsMobileAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/login");
  };

  /* =====================================================
     SIGNUP
  ===================================================== */

  const handleSignup = () => {
    setIsAccountOpen(false);
    setIsMobileAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/signup");
  };

  /* =====================================================
     ORDERS
  ===================================================== */

  const handleOrders = () => {
    setIsAccountOpen(false);
    setIsMobileAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/orders");
  };

  /* =====================================================
     MOBILE MENU CLOSE
  ===================================================== */

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileAccountOpen(false);
  };

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b border-white/10
        transition-all duration-300
        ${
          isScrolled
            ? "bg-[#071a2d]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.22)]"
            : "bg-[#071a2d]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            MAIN NAVBAR
        ================================================= */}

        <div className="h-[70px] flex items-center justify-between">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/30">
              <PillIcon
                size={21}
                strokeWidth={2}
                className="text-white"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-white text-[17px] font-semibold tracking-tight">
                My Pharma
              </h1>

              <p className="text-[9px] text-blue-300 tracking-[0.18em] mt-0.5">
                HEALTHCARE • PHARMACY
              </p>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {navLinks.map((link) => {
              const Icon = link.icon;

              const isActive =
                pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    relative
                    flex items-center gap-2
                    px-4 py-2.5
                    text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }
                  `}
                >
                  <Icon size={16} />

                  {link.label}

                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center gap-1">

            {/* =================================================
                WISHLIST
            ================================================= */}

            {isHomePage && (
              <Link
                to="/wishlist"
                className="
                  hidden sm:flex
                  w-10 h-10
                  items-center justify-center
                  text-slate-400
                  hover:text-white
                  hover:bg-white/[0.06]
                  transition
                "
              >
                <HeartIcon size={19} />
              </Link>
            )}

            {/* =================================================
                CART
            ================================================= */}

            {!isAuthPage && (
              <Link
                to="/cart"
                className="
                  relative
                  w-10 h-10
                  flex items-center justify-center
                  text-slate-400
                  hover:text-white
                  hover:bg-white/[0.06]
                  transition
                "
              >
                <ShoppingCartIcon size={20} />

                {cartItems?.length > 0 && (
                  <span
                    className="
                      absolute
                      top-1 right-0
                      min-w-[17px] h-[17px]
                      px-1
                      bg-blue-600
                      text-white
                      text-[9px]
                      font-bold
                      flex items-center justify-center
                    "
                  >
                    {cartItems.length}
                  </span>
                )}
              </Link>
            )}

            {/* =================================================
                DESKTOP ACCOUNT
            ================================================= */}

            {!isAuthPage && (
              <div
                ref={accountRef}
                className="hidden lg:block relative ml-2"
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsAccountOpen(
                      (prev) => !prev
                    );
                  }}
                  className="
                    flex items-center gap-2
                    px-2.5 py-1.5
                    text-slate-300
                    hover:text-white
                    hover:bg-white/[0.04]
                    transition-all duration-200
                  "
                >
                  <div
                    className="
                      w-8 h-8
                      bg-blue-600
                      flex items-center justify-center
                    "
                  >
                    <UserIcon size={16} />
                  </div>

                  <div className="hidden xl:block text-left">
                    <p className="text-[10px] text-slate-500">
                      {isAuthenticated
                        ? "SIGNED IN AS"
                        : "ACCOUNT"}
                    </p>

                    <p className="text-xs text-white font-medium max-w-[100px] truncate">
                      {isAuthenticated
                        ? username || "User"
                        : ""}
                    </p>
                  </div>

                  <ChevronDownIcon
                    size={15}
                    className={`
                      transition-transform duration-200
                      ${
                        isAccountOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* =================================================
                    DESKTOP ACCOUNT DROPDOWN
                ================================================= */}

                {isAccountOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[calc(100%+8px)]
                      w-[245px]
                      bg-[#0b2035]
                      border border-white/[0.10]
                      shadow-[0_20px_50px_rgba(0,0,0,0.40)]
                      overflow-hidden
                      z-[100]
                    "
                  >

                    {/* USER HEADER */}

                    <div
                      className="
                        px-4 py-4
                        bg-white/[0.025]
                        border-b border-white/[0.08]
                      "
                    >
                      <div className="flex items-center gap-3">

                        <div
                          className="
                            w-10 h-10
                            bg-blue-600
                            flex items-center justify-center
                            shrink-0
                          "
                        >
                          <UserIcon
                            size={18}
                            className="text-white"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[9px] uppercase tracking-[0.16em] text-blue-300">
                            {isAuthenticated
                              ? "Signed in as"
                              : "Account"}
                          </p>

                          <p className="text-sm font-semibold text-white truncate mt-0.5">
                            {isAuthenticated
                              ? username || "User"
                              : "Welcome"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        LOGGED IN
                    ================================================= */}

                    {isAuthenticated ? (
                      <>
                        {/* MY ORDERS */}

                        <button
                          type="button"
                          onClick={handleOrders}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3.5
                            text-sm
                            text-slate-300
                            hover:text-white
                            hover:bg-white/[0.055]
                            transition-all duration-200
                            text-left
                            group
                          "
                        >
                          <div
                            className="
                              w-8 h-8
                              flex items-center justify-center
                              bg-white/[0.06]
                              border border-white/[0.06]
                              group-hover:bg-blue-600/20
                              group-hover:border-blue-500/20
                              transition
                              shrink-0
                            "
                          >
                            <PackageIcon
                              size={16}
                              className="
                                text-slate-400
                                group-hover:text-blue-300
                              "
                            />
                          </div>

                          <span className="flex-1">
                            My Orders
                          </span>

                          <ChevronRightIcon
                            size={15}
                            className="
                              text-slate-600
                              group-hover:text-slate-300
                              group-hover:translate-x-0.5
                              transition
                            "
                          />
                        </button>

                        {/* LOGOUT */}

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3.5
                            text-sm
                            text-slate-400
                            hover:text-red-300
                            hover:bg-red-500/[0.06]
                            transition-all duration-200
                            text-left
                            border-t border-white/[0.06]
                            group
                          "
                        >
                          <div
                            className="
                              w-8 h-8
                              flex items-center justify-center
                              bg-white/[0.04]
                              border border-white/[0.06]
                              group-hover:bg-red-500/10
                              group-hover:border-red-500/10
                              transition
                              shrink-0
                            "
                          >
                            <LogOutIcon
                              size={16}
                              className="
                                text-slate-500
                                group-hover:text-red-300
                              "
                            />
                          </div>

                          <span className="flex-1">
                            Logout
                          </span>
                        </button>
                      </>
                    ) : (
                      /* =================================================
                         LOGGED OUT
                      ================================================= */

                      <>
                        {/* LOGIN */}

                        <button
                          type="button"
                          onClick={handleLogin}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3.5
                            text-sm
                            text-slate-300
                            hover:text-white
                            hover:bg-white/[0.055]
                            transition
                            text-left
                            group
                          "
                        >
                          <div
                            className="
                              w-8 h-8
                              flex items-center justify-center
                              bg-white/[0.06]
                              border border-white/[0.06]
                              group-hover:bg-blue-600/20
                              group-hover:border-blue-500/20
                              transition
                            "
                          >
                            <LogInIcon
                              size={16}
                              className="
                                text-slate-400
                                group-hover:text-blue-300
                              "
                            />
                          </div>

                          <span className="flex-1">
                            Login
                          </span>

                          <ChevronRightIcon
                            size={15}
                            className="
                              text-slate-600
                              group-hover:text-slate-300
                              transition
                            "
                          />
                        </button>

                        {/* SIGN UP */}

                        <button
                          type="button"
                          onClick={handleSignup}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3.5
                            text-sm
                            text-slate-300
                            hover:text-white
                            hover:bg-white/[0.055]
                            transition
                            text-left
                            group
                            border-t border-white/[0.06]
                          "
                        >
                          <div
                            className="
                              w-8 h-8
                              flex items-center justify-center
                              bg-white/[0.06]
                              border border-white/[0.06]
                              group-hover:bg-blue-600/20
                              group-hover:border-blue-500/20
                              transition
                            "
                          >
                            <UserIcon
                              size={16}
                              className="
                                text-slate-400
                                group-hover:text-blue-300
                              "
                            />
                          </div>

                          <span className="flex-1">
                            Sign Up
                          </span>

                          <ChevronRightIcon
                            size={15}
                            className="
                              text-slate-600
                              group-hover:text-slate-300
                              transition
                            "
                          />
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* =================================================
                MOBILE HAMBURGER
            ================================================= */}

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen((prev) => !prev);

                if (isMenuOpen) {
                  setIsMobileAccountOpen(false);
                }
              }}
              className="
                lg:hidden
                w-10 h-10
                flex items-center justify-center
                text-slate-400
                hover:text-white
                hover:bg-white/[0.06]
                transition
              "
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon size={22} />
              ) : (
                <MenuIcon size={22} />
              )}
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {isMenuOpen && (
          <div
            className="
              lg:hidden
              border-t border-white/10
              py-4
            "
          >

            {/* =================================================
                MOBILE NAVIGATION
            ================================================= */}

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
                    className={`
                      flex items-center gap-3
                      px-4 py-3
                      text-sm font-medium
                      transition
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                      }
                    `}
                  >
                    <Icon size={18} />

                    <span>{link.label}</span>

                    <ChevronRightIcon
                      size={15}
                      className="ml-auto opacity-50"
                    />
                  </Link>
                );
              })}
            </div>

            {/* =================================================
                MOBILE ACCOUNT
            ================================================= */}

            {!isAuthPage && (
              <div className="mt-5 pt-4 border-t border-white/10">

                {/* ACCOUNT TOGGLE */}

                <button
                  type="button"
                  onClick={() =>
                    setIsMobileAccountOpen(
                      (prev) => !prev
                    )
                  }
                  className="
                    w-full
                    flex items-center gap-3
                    px-4 py-3
                    text-left
                    text-slate-300
                    hover:bg-white/[0.05]
                    hover:text-white
                    transition
                  "
                >
                  <div
                    className="
                      w-9 h-9
                      bg-blue-600
                      flex items-center justify-center
                      shrink-0
                    "
                  >
                    <UserIcon size={17} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      {isAuthenticated
                        ? "Signed in as"
                        : "Account"}
                    </p>

                    <p className="text-sm text-white font-medium truncate">
                      {isAuthenticated
                        ? username || "User"
                        : "Login / Sign Up"}
                    </p>
                  </div>

                  <ChevronDownIcon
                    size={17}
                    className={`
                      text-slate-500
                      transition-transform duration-200
                      ${
                        isMobileAccountOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* ACCOUNT OPTIONS */}

                {isMobileAccountOpen && (
                  <div className="mt-1 ml-12 border-l border-white/10">

                    {isAuthenticated ? (
                      <>
                        {/* MY ORDERS */}

                        <button
                          type="button"
                          onClick={handleOrders}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3
                            text-sm
                            text-slate-300
                            hover:text-white
                            hover:bg-white/[0.05]
                            transition
                            text-left
                          "
                        >
                          <PackageIcon size={17} />

                          <span>
                            My Orders
                          </span>

                          <ChevronRightIcon
                            size={15}
                            className="ml-auto opacity-50"
                          />
                        </button>

                        {/* LOGOUT */}

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3
                            text-sm
                            text-red-400
                            hover:text-red-300
                            hover:bg-red-500/[0.06]
                            transition
                            text-left
                          "
                        >
                          <LogOutIcon size={17} />

                          <span>
                            Logout
                          </span>
                        </button>
                      </>
                    ) : (
                      <>
                        {/* LOGIN */}

                        <button
                          type="button"
                          onClick={handleLogin}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3
                            text-sm
                            text-blue-400
                            hover:text-blue-300
                            hover:bg-blue-500/[0.06]
                            transition
                            text-left
                          "
                        >
                          <LogInIcon size={17} />

                          <span>
                            Login
                          </span>

                          <ChevronRightIcon
                            size={15}
                            className="ml-auto opacity-50"
                          />
                        </button>

                        {/* SIGN UP */}

                        <button
                          type="button"
                          onClick={handleSignup}
                          className="
                            w-full
                            flex items-center gap-3
                            px-4 py-3
                            text-sm
                            text-blue-400
                            hover:text-blue-300
                            hover:bg-blue-500/[0.06]
                            transition
                            text-left
                          "
                        >
                          <UserIcon size={17} />

                          <span>
                            Sign Up
                          </span>

                          <ChevronRightIcon
                            size={15}
                            className="ml-auto opacity-50"
                          />
                        </button>
                      </>
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