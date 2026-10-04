import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";

import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      <Navbar />

      <Routes>
        {/* ================= LOGIN ================= */}

        <Route
          path="/login"
          element={token ? <Navigate to="/" replace /> : <Login />}
        />

        {/* ================= SIGNUP ================= */}

        <Route
          path="/signup"
          element={token ? <Navigate to="/" replace /> : <Signup />}
        />

        {/* ================= PROTECTED APP ================= */}

        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/services" element={<Services />} />

        <Route path="/products" element={<ProductPage />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}

        <Route
          path="*"
          element={<Navigate to={token ? "/" : "/login"} replace />}
        />
      </Routes>

      <Footer />

      <ToastContainer position="top-center" autoClose={2000} />

      <ScrollToTop />
    </div>
  );
}

export default App;
