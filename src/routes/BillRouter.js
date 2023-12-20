import express from "express"
import { createBillBuyPackage, getAllBill } from "../controllers/BillControllers"

const router = express.Router()

router.get("/getAll", getAllBill)



module.exports = router