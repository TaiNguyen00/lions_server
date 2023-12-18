import express from "express"
import { VNPayIPN, createPaymentVNPay, vnpReturn } from "../controllers/VnpayController";
const router = express.Router()

router.post("/create_payment_url", createPaymentVNPay)
router.get("/vnpay_return", vnpReturn)
router.get("/vnpay_ipn", VNPayIPN)

module.exports = router;