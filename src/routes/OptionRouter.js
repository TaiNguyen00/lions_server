import { Router } from "express";
import { addOption, deleteOption, editOption, getAllOption } from "../controllers/OptionController";


const optionRouter = Router()

optionRouter.get('/', getAllOption)
optionRouter.post('/add-option', addOption)
optionRouter.delete('/delete-option/:id', deleteOption)
optionRouter.put('/edit-option/:id', editOption)
module.exports = optionRouter