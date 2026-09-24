import { Request, Response } from "express";
import { storeInformation } from "../services/store.service";

export const getStore = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: storeInformation
  });
};