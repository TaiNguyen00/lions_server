import { Router } from "express";
import { addFloor, deleteFloor, getAllFloor } from "../controllers/FloorController";

const floorRouter = Router()
floorRouter.get('/', getAllFloor)
floorRouter.post('/add-floor', addFloor)
floorRouter.delete('/delete-floor/:id', deleteFloor)
module.exports = floorRouter