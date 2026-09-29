
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    sku: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    unitCost: {
      type: Number,
      required: true,
      min: 0
    },

    sellingPrice: {
      type: Number,
      required: true,
      min: 0
    },

    stock: {
      type: Number,
      default: 0,
      min: 0
    },

    minimumStockLevel: {
      type: Number,
      default: 10,
      min: 0
    },

    warehouseLocation: {
      type: String,
      required: true,
      trim: true
    },

    supplier: {
      type: String,
      trim: true
    },

    image: {
      type: String,
      default: ""
    },

    description: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

