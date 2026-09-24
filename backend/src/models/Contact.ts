import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  phone?: string;
  email?: string;
  message: string;
  createdAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model<IContact>("Contact", contactSchema);