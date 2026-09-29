import Cart from "../models/Cart.js";


// =========================
// ADD TO CART
// =========================

export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;

    const {
      productId,
      name,
      category,
      price,
      image,
    } = req.body;

    if (!productId || !name || !price) {
      return res.status(400).json({
        message: "Product information is required",
      });
    }

    let cart = await Cart.findOne({ userId });

    // User doesn't have a cart
    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [
          {
            productId,
            name,
            category,
            price,
            image,
            quantity: 1,
          },
        ],
      });

      return res.status(201).json({
        message: "Product added to cart",
        cart,
      });
    }

    // Check if product already exists
    const existingItem = cart.items.find(
      (item) =>
        String(item.productId) === String(productId)
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({
        productId,
        name,
        category,
        price,
        image,
        quantity: 1,
      });
    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    console.error("Add to cart error:", error);

    res.status(500).json({
      message: "Unable to add product to cart",
    });
  }
};


// =========================
// GET CART
// =========================

export const getCart = async (req, res) => {
  try {
    const userId = req.userId;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(200).json({
        items: [],
      });
    }

    res.status(200).json({
      items: cart.items,
    });
  } catch (error) {
    console.error("Get cart error:", error);

    res.status(500).json({
      message: "Unable to fetch cart items",
    });
  }
};


// =========================
// UPDATE CART QUANTITY
// =========================

export const updateCartQuantity = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;
    const { action } = req.body;

    if (!["increase", "decrease"].includes(action)) {
      return res.status(400).json({
        message: "Invalid quantity action",
      });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) =>
        String(item.productId) === String(productId)
    );

    if (!item) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    // Increase quantity
    if (action === "increase") {
      item.quantity += 1;
    }

    // Decrease quantity
    if (action === "decrease") {
      if (item.quantity <= 1) {
        cart.items = cart.items.filter(
          (cartItem) =>
            String(cartItem.productId) !==
            String(productId)
        );
      } else {
        item.quantity -= 1;
      }
    }

    await cart.save();

    res.status(200).json({
      message: "Cart quantity updated",
      cart,
    });
  } catch (error) {
    console.error(
      "Update cart quantity error:",
      error
    );

    res.status(500).json({
      message: "Unable to update cart quantity",
    });
  }
};


// =========================
// REMOVE FROM CART
// =========================

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const itemExists = cart.items.some(
      (item) =>
        String(item.productId) === String(productId)
    );

    if (!itemExists) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    cart.items = cart.items.filter(
      (item) =>
        String(item.productId) !== String(productId)
    );

    await cart.save();

    res.status(200).json({
      message: "Product removed from cart",
      cart,
    });
  } catch (error) {
    console.error(
      "Remove from cart error:",
      error
    );

    res.status(500).json({
      message: "Unable to remove product from cart",
    });
  }
};