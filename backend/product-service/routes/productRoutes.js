
import express from "express";

import {
  getProducts,
  getProductById,
 

} from "../controllers/productController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();



router.get("/", authMiddleware, getProducts);

router.get("/:id", authMiddleware, getProductById);



export default router;

