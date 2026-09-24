import mongoose, { Document, Schema } from "mongoose";

export interface ICallback extends Document {
  name: string;
  phone: string;
  preferredTime?: string;
  message?: string;
  createdAt: Date;
}

const callbackSchema = new Schema<ICallback>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    preferredTime: { type: String, trim: true },
    message: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model<ICallback>("Callback", callbackSchema);