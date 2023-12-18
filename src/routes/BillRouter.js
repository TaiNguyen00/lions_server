import express from "express"
import { getAllBill } from "../controllers/BillControllers"

const router = express.Router()

router.get("/", getAllBill)


module.exports = router