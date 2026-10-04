
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

  const accountRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // =========================
  // CURRENT URL
  // =========================

  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";
  const isHomePage = pathname === "/";

  // =========================
  // REDUX AUTH STATE
  // =========================

  const username = useSelector((state) => state.auth.user);

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const { cartItems } = useCart();

  // =========================
  // NAVIGATION LINKS
  // =========================

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

  // =========================
  // SCROLL EFFECT
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // CLOSE ACCOUNT DROPDOWN
  // WHEN CLICKING OUTSIDE
  // =========================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // =========================
  // CLOSE DROPDOWN WITH ESC
  // =========================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // =========================
  // SEARCH
  // =========================

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(
        `/search?q=${encodeURIComponent(searchQuery.trim())}`
      );

      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("username");

    setIsAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/");
  };

  // =========================
  // LOGIN
  // =========================

  const handleLogin = () => {
    setIsAccountOpen(false);
    setIsMenuOpen(false);

    navigate("/login");
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          isScrolled
            ? "bg-[#071a2d]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
            : "bg-[#071a2d]/90 backdrop-blur-md border-b border-white/[0.06]"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-[72px] flex items-center justify-between gap-5">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="leading-none">

              <div className="text-white font-semibold tracking-[0.12em] text-[15px] sm:text-[17px]">
                MY
                <span className="text-blue-400">
                  -PHARMA
                </span>
              </div>

              <div className="hidden sm:block text-[9px] text-slate-500 tracking-[0.25em] mt-1.5 uppercase">
                Healthcare • Pharmacy
              </div>

            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden lg:flex items-center h-full">

            <div className="flex items-center gap-1">

              {navLinks.map((link) => {

                const Icon = link.icon;

                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      relative px-4 py-2.5
                      flex items-center gap-2
                      text-sm
                      transition-all duration-200
                      ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >

                    <Icon
                      className={`w-[17px] h-[17px] ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-500"
                      }`}
                      strokeWidth={1.8}
                    />

                    <span>{link.label}</span>

                  </Link>
                );
              })}

            </div>

          </nav>

          {/* ================= SEARCH ================= */}

          <div className="hidden md:flex flex-1 max-w-[360px] lg:max-w-[420px]">

            <form
              onSubmit={handleSearch}
              className="w-full"
            >

              <div className="relative group">

                <SearchIcon
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    w-[17px] h-[17px]
                    text-slate-500
                    group-focus-within:text-blue-400
                    transition-colors
                  "
                  strokeWidth={1.8}
                />

                <input
                  type="text"
                  placeholder="Search medicines, products..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="
                    w-full
                    h-10
                    pl-10 pr-4
                    bg-[#0b2035]
                    border border-white/[0.08]
                    text-sm text-white
                    placeholder:text-slate-600
                    outline-none
                    transition-all duration-200
                    focus:border-blue-500/60
                    focus:bg-[#0d253d]
                  "
                />

              </div>

            </form>

          </div>

          {/* ================= ACTIONS ================= */}

          <div className="flex items-center gap-1 shrink-0">

            {/* ================= WISHLIST ================= */}

            {isHomePage && (
              <button
                onClick={() => navigate("/wishlist")}
                className="
                  relative
                  w-10 h-10
                  flex items-center justify-center
                  text-slate-400
                  hover:text-white
                  hover:bg-white/[0.05]
                  transition-all duration-200
                "
                aria-label="Wishlist"
              >
                <HeartIcon
                  className="w-[19px] h-[19px]"
                  strokeWidth={1.8}
                />
              </button>
            )}

            {/* ================= CART ================= */}

            {isHomePage && (
              <Link
                to="/cart"
                className="
                  relative
                  w-10 h-10
                  flex items-center justify-center
                  border border-blue-500/30
                  bg-blue-500/10
                  hover:bg-blue-500/15
                  hover:border-blue-400/50
                  transition-all duration-300
                "
              >

                <ShoppingCartIcon
                  className="w-[21px] h-[21px] text-blue-400"
                  strokeWidth={1.8}
                />

                {cartItems?.length > 0 && (
                  <span
                    className="
                      absolute
                      -top-1.5
                      -right-1.5
                      min-w-[18px]
                      h-[18px]
                      px-1
                      flex items-center justify-center
                      bg-blue-600
                      text-white
                      text-[10px]
                      font-bold
                      leading-none
                      rounded-full
                      border-2
                      border-[#071a2d]
                    "
                  >
                    {cartItems.length}
                  </span>
                )}

              </Link>
            )}

            {/* ================= DIVIDER ================= */}

            {!isLoginPage && (
              <div className="hidden md:block w-px h-7 bg-white/10 mx-2" />
            )}

            {/* ================= ACCOUNT ================= */}

            {!isLoginPage && (
              <div
                ref={accountRef}
                className="relative"
              >

                <button
                  onClick={() =>
                    setIsAccountOpen(!isAccountOpen)
                  }
                  className="
                    flex items-center gap-2
                    h-10
                    px-2.5
                    text-slate-300
                    hover:text-white
                    hover:bg-white/[0.05]
                    transition-all duration-200
                  "
                  aria-label="Account menu"
                  aria-expanded={isAccountOpen}
                >

                  <div
                    className="
                      w-8 h-8
                      flex items-center justify-center
                      bg-blue-500/10
                      border border-blue-500/20
                      text-blue-400
                    "
                  >
                    <UserIcon
                      className="w-[17px] h-[17px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <ChevronDownIcon
                    className={`
                      hidden sm:block
                      w-4 h-4
                      text-slate-500
                      transition-transform duration-200
                      ${
                        isAccountOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                    strokeWidth={1.8}
                  />

                </button>

                {/* ================= DESKTOP ACCOUNT DROPDOWN ================= */}

                {isAccountOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[52px]
                      w-56
                      bg-[#0b2035]
                      border border-white/[0.08]
                      shadow-[0_18px_50px_rgba(0,0,0,0.35)]
                      overflow-hidden
                    "
                  >

                    {/* ================= LOGGED IN ================= */}

                    {isAuthenticated ? (
                      <>

                        {/* User Header */}

                        <div
                          className="
                            px-4 py-3.5
                            border-b border-white/[0.07]
                          "
                        >

                          <p className="text-[11px] text-slate-500 uppercase tracking-[0.15em]">
                            Signed in as
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              text-white
                              font-medium
                              truncate
                            "
                          >
                            {username || "User"}
                          </p>

                        </div>

                        {/* My Orders */}

                        <button
                          onClick={() => {
                            navigate("/orders");
                            setIsAccountOpen(false);
                          }}
                          className="
                            w-full
                            px-4 py-3
                            flex items-center gap-3
                            text-sm text-slate-300
                            hover:text-white
                            hover:bg-white/[0.05]
                            transition-colors
                          "
                        >

                          <PackageIcon
                            className="w-[17px] h-[17px] text-slate-500"
                            strokeWidth={1.8}
                          />

                          My Orders

                        </button>

                        {/* Logout */}

                        <div className="border-t border-white/[0.07]">

                          <button
                            onClick={handleLogout}
                            className="
                              w-full
                              px-4 py-3
                              flex items-center gap-3
                              text-sm text-slate-400
                              hover:text-red-400
                              hover:bg-red-500/[0.05]
                              transition-colors
                            "
                          >

                            <LogOutIcon
                              className="w-[17px] h-[17px]"
                              strokeWidth={1.8}
                            />

                            Logout

                          </button>

                        </div>

                      </>

                    ) : (

                      /* ================= LOGGED OUT ================= */

                      <button
                        onClick={handleLogin}
                        className="
                          w-full
                          px-4 py-3.5
                          flex items-center gap-3
                          text-sm text-slate-300
                          hover:text-white
                          hover:bg-white/[0.05]
                          transition-colors
                        "
                      >

                        <LogInIcon
                          className="w-[17px] h-[17px] text-blue-400"
                          strokeWidth={1.8}
                        />

                        Login

                      </button>

                    )}

                  </div>
                )}

              </div>
            )}

            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              className="
                md:hidden
                w-10 h-10
                flex items-center justify-center
                text-slate-400
                hover:text-white
                hover:bg-white/[0.05]
                transition-all duration-200
              "
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >

              {isMenuOpen ? (
                <XIcon
                  className="w-5 h-5"
                  strokeWidth={1.8}
                />
              ) : (
                <MenuIcon
                  className="w-5 h-5"
                  strokeWidth={1.8}
                />
              )}

            </button>

          </div>

        </div>

        {/* ================= MOBILE MENU ================= */}

        {isMenuOpen && (
          <div
            className="
              md:hidden
              border-t border-white/[0.08]
              py-5
              bg-[#071a2d]
            "
          >

            {/* ================= MOBILE SEARCH ================= */}

            <form
              onSubmit={handleSearch}
              className="mb-5"
            >

              <div className="relative">

                <SearchIcon
                  className="
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    w-[17px] h-[17px]
                    text-slate-500
                  "
                  strokeWidth={1.8}
                />

                <input
                  type="text"
                  placeholder="Search medicines, products..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="
                    w-full
                    h-11
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

            </form>

            {/* ================= MOBILE NAVIGATION ================= */}

            <div className="border-t border-white/[0.06]">

              {navLinks.map((link) => {

                const Icon = link.icon;

                const isActive =
                  pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() =>
                      setIsMenuOpen(false)
                    }
                    className={`
                      flex items-center justify-between
                      py-3.5
                      border-b border-white/[0.05]
                      transition-colors
                      ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >

                    <div className="flex items-center gap-3">

                      <Icon
                        className={`w-[18px] h-[18px] ${
                          isActive
                            ? "text-blue-400"
                            : "text-slate-500"
                        }`}
                        strokeWidth={1.8}
                      />

                      <span className="text-sm">
                        {link.label}
                      </span>

                    </div>

                    <ChevronRightIcon
                      className="w-4 h-4 text-slate-600"
                      strokeWidth={1.7}
                    />

                  </Link>
                );
              })}

            </div>

            {/* ================= MOBILE ACCOUNT ================= */}

            {!isLoginPage && (
              <div className="mt-4 border-t border-white/[0.06] pt-4">

                <button
                  onClick={() =>
                    setIsAccountOpen(!isAccountOpen)
                  }
                  className="
                    w-full
                    flex items-center justify-between
                    py-3
                    text-slate-300
                    hover:text-white
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-9 h-9
                        flex items-center justify-center
                        bg-blue-500/10
                        border border-blue-500/20
                        text-blue-400
                      "
                    >
                      <UserIcon
                        className="w-[18px] h-[18px]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="text-left">

                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                        Account
                      </p>

                      <p className="text-sm text-white font-medium">
                        {isAuthenticated
                          ? username || "User"
                          : "Login"}
                      </p>

                    </div>

                  </div>

                  <ChevronDownIcon
                    className={`
                      w-4 h-4 text-slate-500
                      transition-transform
                      ${
                        isAccountOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                    strokeWidth={1.8}
                  />

                </button>

                {/* ================= MOBILE ACCOUNT DROPDOWN ================= */}

                {isAccountOpen && (
                  <div
                    className="
                      mt-2
                      border border-white/[0.07]
                      bg-[#0b2035]
                    "
                  >

                    {isAuthenticated ? (
                      <>

                        {/* My Account */}

                        <button
                          onClick={() => {
                            navigate("/account");
                            setIsAccountOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="
                            w-full
                            px-4 py-3
                            flex items-center gap-3
                            text-sm text-slate-300
                            hover:text-white
                            hover:bg-white/[0.05]
                          "
                        >

                          <UserIcon className="w-4 h-4" />

                          My Account

                        </button>

                        {/* My Orders */}

                        <button
                          onClick={() => {
                            navigate("/orders");
                            setIsAccountOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="
                            w-full
                            px-4 py-3
                            flex items-center gap-3
                            text-sm text-slate-300
                            hover:text-white
                            hover:bg-white/[0.05]
                          "
                        >

                          <PackageIcon className="w-4 h-4" />

                          My Orders

                        </button>

                        {/* Logout */}

                        <button
                          onClick={handleLogout}
                          className="
                            w-full
                            px-4 py-3
                            flex items-center gap-3
                            border-t border-white/[0.07]
                            text-sm text-slate-400
                            hover:text-red-400
                            hover:bg-red-500/[0.05]
                          "
                        >

                          <LogOutIcon className="w-4 h-4" />

                          Logout

                        </button>

                      </>

                    ) : (

                      /* ================= MOBILE LOGIN ================= */

                      <button
                        onClick={handleLogin}
                        className="
                          w-full
                          px-4 py-3
                          flex items-center gap-3
                          text-sm text-slate-300
                          hover:text-white
                          hover:bg-white/[0.05]
                        "
                      >

                        <LogInIcon
                          className="w-4 h-4 text-blue-400"
                        />

                        Login

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

