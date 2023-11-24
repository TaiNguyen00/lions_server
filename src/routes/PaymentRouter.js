import express from "express"
import {acceptBill, createBill, getPayment } from "../controllers/PaymentController"
const router = express.Router()

router.get("/", getPayment)
router.post("/create-bill", createBill)
router.post("/accept-bill/:id", acceptBill)

module.exports = router