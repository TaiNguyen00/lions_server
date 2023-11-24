import { Router } from "express";
import { addOptionAdditional, editOptionAdditinal, getAllOptionAdditional } from "../controllers/OptionAdditional";

const optionAdditionalRouter = Router()

optionAdditionalRouter.get('/', getAllOptionAdditional)
optionAdditionalRouter.post('/OptionRoom-add', addOptionAdditional)
optionAdditionalRouter.put('/OptionRoom-edit/:id', editOptionAdditinal)

module.exports = optionAdditionalRouter