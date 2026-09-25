import { Request, Response, NextFunction } from "express";
import Contact from "../models/Contact";

export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, phone, email, message } = req.body;

    const contact = await Contact.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim(),
      message: message.trim()
    });

    res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully",
      data: contact
    });
  } catch (error) {
    next(error);
  }
};