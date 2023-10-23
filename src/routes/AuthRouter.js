import express from "express"
import { loginUser, registerUser } from "../controllers/AuthControllers"

const router = express.Router()


router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router