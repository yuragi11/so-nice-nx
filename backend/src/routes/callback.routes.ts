import { Router } from "express";
import { createCallback } from "../controllers/callback.controller";
import { validateCallback } from "../validators/callback.validator";

const router = Router();

router.post("/", validateCallback, createCallback);

export default router;