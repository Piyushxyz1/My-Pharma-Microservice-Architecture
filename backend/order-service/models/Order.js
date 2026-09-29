import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    items: [
      {
        productId: {
          type: Number,
          required: true,
        },
        name: String,
        price: Number,
        quantity: Number,
        image: String,
        category: String,
      },
    ],

    shippingAddress: {
      name: String,
      phone: String,
      address: String,
      city: String,
      state: String,
      pincode: String,
    },

    payment: {
      orderId: {
        type: String,
        required: true,
      },
      paymentId: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        default: "paid",
      },
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    orderStatus: {
      type: String,
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);