import { Router } from "express";
import { addCateloryRoom, deleteCateloryRoom, getAllCateloryRoom, getCateloryRoomById, updateCateloryRoom } from "../controllers/CateloryRoom";

const cateloryRoomRouter = Router()
cateloryRoomRouter.get('/getAll', getAllCateloryRoom)
cateloryRoomRouter.post('/getID', getCateloryRoomById)
cateloryRoomRouter.post('/add-cateloryRoom', addCateloryRoom)
cateloryRoomRouter.put('/edit-cateloryRoom', updateCateloryRoom)
cateloryRoomRouter.delete('/delete-cateloryRoom', deleteCateloryRoom)
module.exports = cateloryRoomRouter