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
// Resolve the public/assets directory robustly across dev (ts-node) and prod (node dist)
// builds, where __dirname differs and the public folder may not be copied into dist.
function resolveAssetsDir(): string {
  const candidates = [
    path.join(__dirname, "public", "assets"), // prod: dist/src/public/assets (if copied)
    path.join(__dirname, "..", "public", "assets"), // dev: backend/src/../public/assets
    path.join(__dirname, "..", "..", "public", "assets"), // prod: dist/src/../../public/assets
    path.join(process.cwd(), "public", "assets"), // cwd-based fallback
  ];

  const fs = require("fs");
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  // Fallback: return the most likely path even if it doesn't exist yet
  return candidates[candidates.length - 1];
}

app.use("/assets", express.static(resolveAssetsDir()));

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