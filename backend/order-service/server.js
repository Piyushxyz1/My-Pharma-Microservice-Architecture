import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", orderRoutes);

app.get("/health", (req, res) => {
  res.json({
    success: true,
    service: "order-service",
    message: "Order Service is running",
  });
});

const PORT = process.env.PORT || 5005;

mongoose
  .connect(process.env.MONGO_URI,{dbName:"orders"})
  .then(() => {
    console.log("Order MongoDB connected");

   app.listen(PORT, "0.0.0.0", () => {
  console.log(`Order service is running on port ${PORT}`);
});

  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });