import { Router } from "express";
import { addStaff, deleteStaff, editStaff, getAllStaff } from "../controllers/StaffController";
const staffRouter = Router()

staffRouter.get('/getAll', getAllStaff)
staffRouter.post('/add-staff', addStaff)
staffRouter.put('/edit-staff', editStaff)
staffRouter.delete('/delete-staff/:id', deleteStaff)
// router.get('/', deletestaff)

module.exports = staffRouter