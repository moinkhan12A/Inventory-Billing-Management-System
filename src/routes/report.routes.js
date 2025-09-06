import express from "express";
import { getInventoryReport, getTransactionReport, getHistoryByContact } from "../controllers/report.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);
router.get("/inventory", getInventoryReport);
router.get("/transactions", getTransactionReport);
router.get("/history/:contactId", getHistoryByContact);

export default router;
