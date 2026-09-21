import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.config.js";
import contactRouter from "./routes/route.js";

dotenv.config({
  quiet: true,
});

const app = express();
app.use(express.json());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// health API
app.use("/health", (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "Portfolio API is working!" });
});

// contact API
app.use("/api/v1", contactRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`MongoDb connection error: ${error}`);
  }
};

startServer();
