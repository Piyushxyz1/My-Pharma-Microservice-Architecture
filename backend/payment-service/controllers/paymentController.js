import Razorpay from "razorpay";
import crypto from "crypto";
import axios from "axios";

// ===============================
// CREATE PAYMENT ORDER
// ===============================

export const createPaymentOrder = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const { amount } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount",
      });
    }

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        service: "my-pharma",
      },
    });

    return res.status(201).json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    });
  } catch (error) {
    console.error("Create payment order error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create Razorpay order",
    });
  }
};

// ===============================
// VERIFY PAYMENT
// ===============================

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      cartItems,
      shippingAddress,
    } = req.body;

    // ===============================
    // VALIDATE PAYMENT RESPONSE
    // ===============================

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment details are incomplete",
      });
    }

    // ===============================
    // CREATE SIGNATURE BODY
    // ===============================

    const body =
      razorpay_order_id +
      "|" +
      razorpay_payment_id;

    // ===============================
    // GENERATE SIGNATURE
    // ===============================

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body)
      .digest("hex");

    // ===============================
    // COMPARE SIGNATURE
    // ===============================

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    // ===============================
    // PAYMENT VERIFIED
    // ===============================

    const userId = req.userId;
    console.log(userId)

    // ===============================
    // SEND ORDER TO ORDER SERVICE
    // ===============================

    const orderResponse = await axios.post(
      "http://localhost:5005/api/orders/create",
      {
        userId,

        items: cartItems,

        shippingAddress,

        payment: {
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
          status: "paid",
        },

        totalAmount: amount,

        orderStatus: "confirmed",
        
      },

       {
    headers: {
      token: req.headers.token,
    },
  }
     
      
    );

    // ===============================
    // RESPONSE TO FRONTEND
    // ===============================

    return res.status(200).json({
      success: true,

      message: "Payment verified and order created",

      payment: {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      },

      order: orderResponse.data.order,
    });

 
    } catch (error) {
  console.error("Payment verification error:", error.message);
  console.error("Response:", error.response?.data);
  console.error("Status:", error.response?.status);
  console.error("Stack:", error.stack);

  return res.status(500).json({
    success: false,
    message: error.message,
    orderServiceError: error.response?.data || null,
  });
}

 
  }
