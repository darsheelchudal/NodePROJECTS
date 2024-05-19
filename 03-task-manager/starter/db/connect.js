import mongoose from "mongoose";
import dotenv from "dotenv";

const connectionString = `mongodb+srv://darsheelchudal11:darsheel@cluster2.wcbft9e.mongodb.net/?retryWrites=true&appName=Cluster2`;

export const connectDB = (url) => {
  return mongoose.connect(connectionString);
};
