import { Router } from "express";
import { addOptionStaff, getAllOptionStaff } from "../controllers/OptionStaffController";

const optionStaffRouter = Router()

optionStaffRouter.get('/', getAllOptionStaff)
optionStaffRouter.post('/add-staff-option', addOptionStaff)
module.exports = optionStaffRouter