
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Cart Service MongoDB connected");
  } catch (error) {
    console.error(
      "Cart Service MongoDB connection error:",
      error.message
    );

    process.exit(1);
  }
};

export default connectDB;

