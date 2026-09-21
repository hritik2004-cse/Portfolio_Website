import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `mongoDB connected successfully: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error(`mongoDb connection error: ${error}`);
  }
};

export default connectDB;
