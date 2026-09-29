
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    service: "Product Service",
    status: "running"
  });
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});

