import { Request, Response, NextFunction } from "express";

export const validateContact = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, phone, email, message } = req.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: "Name is required"
    });
  }

  if (!phone || typeof phone !== "string") {
    return res.status(400).json({
      success: false,
      message: "Phone is required"
    });
  }

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone.trim())) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid 10-digit Indian phone number"
    });
  }

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      success: false,
      message: "Message is required"
    });
  }

  next();
};