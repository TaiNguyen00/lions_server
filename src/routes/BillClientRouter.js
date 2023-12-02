import express from "express"
import { addBillClients, getAllBillClient, getBillClientById } from "../controllers/BillClientController"

const router = express.Router()


router.get("/getAll", getAllBillClient)
router.get("/getByID/:id", getBillClientById)
router.post("/bill-client-add", addBillClients)

module.exports = router