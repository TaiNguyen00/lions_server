import express from "express"
import { getAccountById, addAccount, editAccount, deleteAccount, getAccountYourProductById } from "../controllers/AccountController";
const router = express.Router()

router.post("/getManege", getAccountById)
router.post("/getAllManege", getAccountYourProductById)
router.post("/addManege", addAccount)
router.put("/editManege", editAccount)
router.delete("/deleteManege", deleteAccount)


module.exports = router;