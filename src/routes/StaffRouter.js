import { Router } from "express";
import { addStaff, deleteStaff, editStaff, getAllStaff } from "../controllers/StaffController";
const staffRouter = Router()

staffRouter.get('/', getAllStaff)
staffRouter.post('/add-staff', addStaff)
staffRouter.put('/edit-staff/:id', editStaff)
staffRouter.delete('/delete-staff', deleteStaff)
// router.get('/', deletestaff)

module.exports = staffRouter