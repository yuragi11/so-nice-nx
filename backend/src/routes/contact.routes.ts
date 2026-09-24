import { Router } from "express";
import { createContact } from "../controllers/contact.controller";
import { validateContact } from "../validators/contact.validator";

const router = Router();

router.post("/", validateContact, createContact);

export default router;