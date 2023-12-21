import { Router } from "express";
import { deleteStaff, editStaff, getAllStaff } from "../controllers/StaffController";
const staffRouter = Router()

staffRouter.post('/getAll', getAllStaff)
staffRouter.put('/edit-staff', editStaff)
staffRouter.delete('/delete-staff', deleteStaff)

module.exports = staffRouter