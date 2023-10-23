import { Router } from "express";
// api
import userRouter from "./UserRouter"
import authRouter from "./AuthRouter"
import packageRouter from "./PackageRouter"
import roomRouter from "./RoomRouter"
import optionRouter from "./OptionRouter"
import OptionRoomRouter from "./RoomOptionRouter"
import YourProductRouter from "./YourProductRouter"
import floorRouter from "./FoorRouter"
import optionStaffRouter from "./StaffOptionRouter"
import staffRouter from "./StaffRouter"
const router = Router()

router.use("user", userRouter)
router.use("/package/", packageRouter)
router.use("/option/", optionRouter)
router.use("/optionRoom/", OptionRoomRouter)
router.use("/optionStaff/", optionStaffRouter)
router.use("/yourProduct/", YourProductRouter)
router.use("/staff/", staffRouter)
router.use("/auth", authRouter)
router.use("/room/", roomRouter)
router.use("/floor/", floorRouter)

module.exports = router