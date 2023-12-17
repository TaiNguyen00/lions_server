import express from "express"
import { loginForAccountManage, loginForReception, loginUser, registerUser } from "../controllers/AuthControllers"

const router = express.Router()


router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/login-reception", loginForReception)
router.post("/login-owner", loginForAccountManage)

module.exports = router