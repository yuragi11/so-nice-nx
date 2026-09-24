import { Request, Response, NextFunction } from "express";
import Callback from "../models/Callback";

export const createCallback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, phone, preferredTime, message } = req.body;

    const callback = await Callback.create({
      name: name.trim(),
      phone: phone.trim(),
      preferredTime: preferredTime?.trim(),
      message: message?.trim()
    });

    res.status(201).json({
      success: true,
      message: "Callback request submitted successfully",
      data: callback
    });
  } catch (error) {
    next(error);
  }
};