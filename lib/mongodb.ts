import mongoose from "mongoose";

const connectMongo = async (): Promise<void> => {
  if (!process.env.MONGODB_URL) throw new Error("MONGODB_URL is not defined");
  const url: string = process.env.MONGODB_URL.replace(
    "PASSWORD",
    process.env.MONGODB_PASSWORD as string,
  );
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }
    await mongoose.connect(url as string);
    // {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // }
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", (error as Error).message);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongo;
