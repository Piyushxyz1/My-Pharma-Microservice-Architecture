
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();




connectDB();

app.use(cors());

app.use(express.json());


// ==========================================
// ROUTES
// ==========================================

app.use("/", cartRoutes);


// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Cart Service is running",
  });
});


// ==========================================
// SERVER
// ==========================================

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(
    `Cart Service running on port ${PORT}`
  );
});

