import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// ===============================
// HEALTH CHECK
// ===============================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Gateway is running",
  });
});

// ===============================
// AUTH SERVICE
// Gateway: /api/auth/*
// Auth:    /api/auth/*
// ===============================

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL,
    changeOrigin: true,

    // pathRewrite: (path) => {
    //   return `/api/auth${path}`;
    // },
  })
);

// ===============================
// CART SERVICE
// Gateway: /api/cart/*
// Cart:    /api/cart/*
// ===============================

app.use(
  "/api/cart",
  createProxyMiddleware({
    target: process.env.CART_SERVICE_URL,
    changeOrigin: true,

    // pathRewrite: (path) => {
    //   return `/api/cart${path}`;
    // },
  })
);

// ===============================
// PAYMENT SERVICE
// Gateway: /api/payment/*
// Payment: /api/payment/*
// ===============================

app.use(
  "/api/payment",
  createProxyMiddleware({
    target: process.env.PAYMENT_SERVICE_URL,
    changeOrigin: true,

    // pathRewrite: (path) => {
    //   return `/api/payment${path}`;
    // },
  })
);

// ===============================
// ORDER SERVICE
// Gateway: /api/orders/*
// Order:   /api/orders/*
// ===============================

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: process.env.ORDER_SERVICE_URL,
    changeOrigin: true,

    // pathRewrite: (path) => {
    //   return `/api/orders${path}`;
    // },
  })
);

// ===============================
// SERVER
// ===============================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API Gateway running on port ${PORT}`);
});