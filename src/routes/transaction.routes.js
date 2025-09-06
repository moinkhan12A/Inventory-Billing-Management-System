import express from "express";
import { createTransaction, getTransactions } from "../controllers/transaction.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/", createTransaction);
router.get("/", getTransactions);

export default router;
