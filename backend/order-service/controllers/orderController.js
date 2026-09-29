import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      payment,
      totalAmount,
    } = req.body;

    // userId JWT middleware se milega
    const userId = req.userId;

    if (
      !userId ||
      !items ||
      !items.length ||
      !payment?.orderId ||
      !payment?.paymentId ||
      !totalAmount
    ) {
      return res.status(400).json({
        success: false,
        message: "Order details are incomplete",
      });
    }

    const order = await Order.create({
      userId,
      items,
      shippingAddress,
      payment,
      totalAmount,
      orderStatus: "confirmed",
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create order",
    });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    // JWT middleware se userId
    const userId = req.userId;

    const orders = await Order.find({
      userId,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch orders",
    });
  }
};