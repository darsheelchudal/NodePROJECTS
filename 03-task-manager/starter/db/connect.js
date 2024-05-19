import mongoose from "mongoose";

const connectDB = `mongodb+srv://darsheelchudal11:darsheel@cluster2.wcbft9e.mongodb.net/?retryWrites=true&appName=Cluster2`;

mongoose.connect(connectDB).then(() => console.log("CONNECTED SUCCESSFULLY"));
