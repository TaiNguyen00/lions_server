import express from "express"

import { capturePayment, createOrder } from "../controllers/PaypalControllers"
const router = express.Router()

// gửi yêu cầu mua hàng
router.post("/orders", createOrder)

// xác nhận thanh toán, cập nhật lại giữ liệu tại đây
router.post("/orders/capture", capturePayment)

module.exports = router