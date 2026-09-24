import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category: "Women" | "Men" | "Kids" | "Winter";
  subcategory: string;
  gender: "Women" | "Men" | "Kids" | "Unisex";
  description: string;
  price: number;
  image: string;
  featured: boolean;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["Women", "Men", "Kids", "Winter"]
    },
    subcategory: { type: String, required: true, trim: true },
    gender: {
      type: String,
      required: true,
      enum: ["Women", "Men", "Kids", "Unisex"]
    },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true, trim: true },
    featured: { type: Boolean, default: false },
    available: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);