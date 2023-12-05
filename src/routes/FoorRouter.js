import { Router } from "express";
import { addFloor, deleteFloor, editFloor, getAllFloor, getFloorById } from "../controllers/FloorController";

const floorRouter = Router()
floorRouter.get('/getAll', getAllFloor)
floorRouter.get('/getID/:id', getFloorById)
floorRouter.post('/add-floor', addFloor)
floorRouter.put('/edit-floor', editFloor)
floorRouter.delete('/delete-floor/:id', deleteFloor)
module.exports = floorRouter