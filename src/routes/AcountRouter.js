import express from "express"
import { getAccountById, addAccount } from "../controllers/AccountController";
const router = express.Router()

router.post("/getManege", getAccountById)
router.post("/addManege", addAccount)


module.exports = router;