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
import Signup from "./pages/auth/Signup";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import ScrollToTop from "./components/ScrollToTop";

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
          
          <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/orders" element={<Orders/>} />
      </Routes>

      <Footer />

      <ToastContainer
        position="top-center"
        autoClose={2000}
      />
      <ScrollToTop/>

    </div>
  );
}

export default App;