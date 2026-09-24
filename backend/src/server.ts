import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db";

import productRoutes from "./routes/product.routes";
import storeRoutes from "./routes/store.routes";
import contactRoutes from "./routes/contact.routes";
import callbackRoutes from "./routes/callback.routes";

import { errorHandler } from "./middleware/error.middleware";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((origin) => origin.trim())
  : ["http://localhost:3000"];

app.use(
  cors({
    origin: allowedOrigins
  })
);

app.use(express.json());

// Serve static assets (product images, etc.)
app.use("/assets", express.static(path.join(__dirname, "..", "public", "assets")));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SO NICE NX API is running"
  });
});

app.use("/api/products", productRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/callback", callbackRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use(errorHandler);

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`SO NICE NX API running on port ${PORT}`);
  });
};

startServer();