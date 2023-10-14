import express from "express"
import {testAPI } from "../controllers/UserController"

import { VerifyToken } from "../middlewares/VerifyToken"

const router = express.Router();



// test API
router.get("/test", VerifyToken,testAPI)


module.exports = router 