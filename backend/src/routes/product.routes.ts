import { Router } from "express";
import {
  getProducts,
  getProductById,
  getFeaturedProducts
} from "../controllers/product.controller";

const router = Router();

router.get("/featured", getFeaturedProducts);
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;