import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());


// ===============================
// PAYMENT ROUTES
// ===============================

app.use(
  "/api/payment",
  paymentRoutes
);


// ===============================
// HEALTH CHECK
// ===============================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "payment-service",
    message: "Payment Service is running",
  });
});


// ===============================
// SERVER
// ===============================

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(
    `Payment Service running on port ${PORT}`
  );
});