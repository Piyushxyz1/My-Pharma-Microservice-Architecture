import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();


// 1. ENVIRONMENT VALIDATION

const requiredEnvVars = [
  "APP_URL",
  "AUTH_SERVICE_URL",
  "CART_SERVICE_URL",
  "PAYMENT_SERVICE_URL",
  "ORDER_SERVICE_URL",
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`FATAL: Missing required environment variable ${envVar}`);
    process.exit(1);
  }
}

const app = express();
const PORT = process.env.PORT || 5000;

// REQUIRED FOR RENDER: Instructs Express to trust Render's reverse proxy headers
app.set("trust proxy", 1);


// 2. SECURITY & LOGGING


app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Rate limiting: Protects services from excessive requests
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
});
app.use(limiter);


// 3. HEALTH CHECK ROUTE


// DO NOT use express.json() globally above proxy routes.
// Keep it scoped ONLY to non-proxied routes like /health.
app.get("/health", express.json(), (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Gateway is running smoothly",
    timestamp: new Date().toISOString(),
  });
});


// 4. PROXY FACTORY FUNCTION


const createGatewayProxy = (targetUrl) =>
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    
    // Render Cold Start Timeout Protection (60 seconds)
    timeout: 60000,      // Time to wait establishing socket connection
    proxyTimeout: 60000, // Time to wait for downstream HTTP response
    
    onError: (err, req, res) => {
      console.error(`[Gateway Proxy Error] ${req.method} ${req.originalUrl} -> ${targetUrl}:`, err.message);
      
      if (!res.headersSent) {
        res.status(503).json({
          success: false,
          message: "Service temporarily unavailable. Downstream service may be waking up, please retry in 30 seconds.",
        });
      }
    },
  });


// 5. SERVICE ROUTES

//  We re-attach req.url base paths so Express's path-stripping
// does not cause 404s on your downstream microservices.

// AUTH SERVICE
app.use("/api/auth", (req, res, next) => {
  req.url = `/api/auth${req.url}`;
  createGatewayProxy(process.env.AUTH_SERVICE_URL)(req, res, next);
});

// CART SERVICE
app.use("/api/cart", (req, res, next) => {
  req.url = `/api/cart${req.url}`;
  createGatewayProxy(process.env.CART_SERVICE_URL)(req, res, next);
});

// PAYMENT SERVICE
app.use("/api/payment", (req, res, next) => {
  req.url = `/api/payment${req.url}`;
  createGatewayProxy(process.env.PAYMENT_SERVICE_URL)(req, res, next);
});

// ORDER SERVICE
app.use("/api/orders", (req, res, next) => {
  req.url = `/api/orders${req.url}`;
  createGatewayProxy(process.env.ORDER_SERVICE_URL)(req, res, next);
});


// 6. 404 FALLBACK

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Requested API endpoint not found on Gateway",
  });
});


// 7. SERVER START & SHUTDOWN


const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`API Gateway operational on port ${PORT}`);
});

const handleShutdown = (signal) => {
  console.log(`${signal} received. Closing HTTP server connections...`);
  server.close(() => {
    console.log("Gateway server shut down cleanly.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forced shutdown due to hanging active connections.");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", () => handleShutdown("SIGTERM"));
process.on("SIGINT", () => handleShutdown("SIGINT"));


// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import { createProxyMiddleware } from "http-proxy-middleware";

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 5000;

// // ===============================
// // MIDDLEWARE
// // ===============================

// app.use(cors({
//   origin: process.env.APP_URL
// }));
// app.use(helmet());
// app.use(morgan("dev"));

// // ===============================
// // HEALTH CHECK
// // ===============================

// app.get("/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "API Gateway is running",
//   });
// });

// // ===============================
// // AUTH SERVICE
// // Gateway: /api/auth/*
// // Auth:    /api/auth/*
// // ===============================

// app.use(
//   "/api/auth",
//   createProxyMiddleware({
//     target: process.env.AUTH_SERVICE_URL,
//     changeOrigin: true,

//     // pathRewrite: (path) => {
//     //   return `/api/auth${path}`;
//     // },
//   })
// );

// // ===============================
// // CART SERVICE
// // Gateway: /api/cart/*
// // Cart:    /api/cart/*
// // ===============================

// app.use(
//   "/api/cart",
//   createProxyMiddleware({
//     target: process.env.CART_SERVICE_URL,
//     changeOrigin: true,

//     // pathRewrite: (path) => {
//     //   return `/api/cart${path}`;
//     // },
//   })
// );

// // ===============================
// // PAYMENT SERVICE
// // Gateway: /api/payment/*
// // Payment: /api/payment/*
// // ===============================

// app.use(
//   "/api/payment",
//   createProxyMiddleware({
//     target: process.env.PAYMENT_SERVICE_URL,
//     changeOrigin: true,

//     // pathRewrite: (path) => {
//     //   return `/api/payment${path}`;
//     // },
//   })
// );

// // ===============================
// // ORDER SERVICE
// // Gateway: /api/orders/*
// // Order:   /api/orders/*
// // ===============================

// app.use(
//   "/api/orders",
//   createProxyMiddleware({
//     target: process.env.ORDER_SERVICE_URL,
//     changeOrigin: true,

//     // pathRewrite: (path) => {
//     //   return `/api/orders${path}`;
//     // },
//   })
// );

// // ===============================
// // SERVER
// // ===============================

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`API Gateway running on port ${PORT}`);
// });