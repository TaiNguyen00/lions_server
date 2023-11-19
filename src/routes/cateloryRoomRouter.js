import { Router } from "express";
import { addCateloryRoom, deleteCateloryRoom, getAllCateloryRoom, getCateloryRoomById, updateCateloryRoom } from "../controllers/CateloryRoom";

const cateloryRoomRouter = Router()
cateloryRoomRouter.get('/getAll', getAllCateloryRoom)
cateloryRoomRouter.get('/getID/:id', getCateloryRoomById)
cateloryRoomRouter.post('/add-cateloryRoom', addCateloryRoom)
cateloryRoomRouter.put('/edit-cateloryRoom/:id', updateCateloryRoom)
cateloryRoomRouter.delete('/delete-cateloryRoom/:id', deleteCateloryRoom)
module.exports = cateloryRoomRouter