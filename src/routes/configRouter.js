import { Router } from "express";
// api
import userRouter from "./UserRouter"
import authRouter from "./AuthRouter"
import packageRouter from "./PackageRouter"
import roomRouter from "./RoomRouter"
import YourProductRouter from "./YourProductRouter"
import floorRouter from "./FoorRouter"
import staffRouter from "./StaffRouter"
import paymentRouter from "./PaymentRouter"
import cateloryRoomRouter from "./cateloryRoomRouter"
import ClientRouter from "./ClientRouter"
const router = Router()

import { VerifyAdmin } from "../middlewares/VerifyToken";

// admin
router.use("/user", userRouter)
router.use("/package/", packageRouter)
router.use("/room/", roomRouter)
router.use("/staff/", staffRouter)
router.use("/yourProduct/", YourProductRouter)
router.use("/floor/", floorRouter)
router.use("/auth", authRouter)
router.use("/payment", paymentRouter)
router.use("/cateloryRoom", cateloryRoomRouter)
router.use("/client", ClientRouter)

module.exports = router