import { Router } from "express";
import { addFloor, deleteFloor, editFloor, getAllFloor, getFloorById } from "../controllers/FloorController";

const floorRouter = Router()
floorRouter.get('/getAll', getAllFloor)
floorRouter.post('/getID', getFloorById)
floorRouter.post('/add-floor', addFloor)
floorRouter.put('/edit-floor', editFloor)
floorRouter.delete('/delete-floor', deleteFloor)
module.exports = floorRouter