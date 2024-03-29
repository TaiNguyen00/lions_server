import { Router } from "express";
import { addRoom, deleteRoom, editRoom, editRoomStatus, getAllRoom, getRoomById, getRoomByIdFloor, getRoomFloor } from "../controllers/RoomController";
const roomRouter = Router()

roomRouter.get('/getAll', getAllRoom)
roomRouter.post('/add-room', addRoom)
roomRouter.post('/getID', getRoomById)
roomRouter.post('/getFloor', getRoomByIdFloor)
roomRouter.post('/getIDRoomFloor', getRoomFloor)
roomRouter.put('/edit-room', editRoom)
roomRouter.put('/edit-room-status', editRoomStatus)
roomRouter.delete('/delete-room', deleteRoom)
// router.get('/', deleteRoom)

module.exports = roomRouter