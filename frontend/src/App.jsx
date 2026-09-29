import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">

      <Navbar />

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route path="/" element={<HomePage />} />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

       <Route path="/cart" element={<CartPage />} />
        {/* ================= PROTECTED ROUTES ================= */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/products"
            element={<ProductPage />}
          />

         

        </Route>
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

      </Routes>

      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={2000}
      />

    </div>
  );
}

export default App;