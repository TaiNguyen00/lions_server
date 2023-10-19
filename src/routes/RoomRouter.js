import { Router } from "express";
import { addRoom, deleteRoom, editRoom, getAllRoom } from "../controllers/RoomController";
const roomRouter = Router()

roomRouter.get('/room', getAllRoom)
roomRouter.post('/add-room', addRoom)
roomRouter.put('/edit-room/:id', editRoom)
roomRouter.delete('/delete-room/:id', deleteRoom)
// router.get('/', deleteRoom)

module.exports = roomRouter