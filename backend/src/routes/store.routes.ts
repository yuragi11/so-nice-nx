import { Router } from "express";
import { getStore } from "../controllers/store.controller";

const router = Router();

router.get("/", getStore);

export default router;