import express from "express";

import {
  addToCart,
  getCart,
  removeFromCart,
  updateCartQuantity,
} from "../controllers/cartController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// Add product
router.post(
  "/add",
  authMiddleware,
  addToCart
);


// Get cart
router.get(
  "/",
  authMiddleware,
  getCart
);


// Update quantity
router.patch(
  "/update/:productId",
  authMiddleware,
  updateCartQuantity
);


// Remove product
router.delete(
  "/remove/:productId",
  authMiddleware,
  removeFromCart
);


export default router;