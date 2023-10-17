import { Router } from "express";
import { addRoom, deleteRoom, editRoom, getAllRoom } from "../controllers/RoomController";
const routerRoom = Router()

routerRoom.get('/room', getAllRoom)
routerRoom.post('/add-room', addRoom)
routerRoom.put('/edit-room/:id', editRoom)
routerRoom.delete('/delete-room/:id', deleteRoom)
// router.get('/', deleteRoom)

module.exports = routerRoom