import { Router } from "express";
import { addOptionRoom, editOptionRoom, getAllOptionRoom } from "../controllers/OptionRoomController";

const OptionRoomRouter = Router()

OptionRoomRouter.get('/', getAllOptionRoom)
OptionRoomRouter.post('/OptionRoom-add', addOptionRoom)
OptionRoomRouter.put('/OptionRoom-edit/:id', editOptionRoom)

module.exports = OptionRoomRouter