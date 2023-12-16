import { Router } from "express";
import { addYourProduct, deleteYourProduct, getAllYourProduct, getProductById, updateYourProduct } from "../controllers/YourProductController";

const YourProductRouter = Router()

YourProductRouter.get('/getAll', getAllYourProduct)
YourProductRouter.post('/getID', getProductById)
YourProductRouter.post('/add-your-product', addYourProduct)
YourProductRouter.put('/edit-your-product', updateYourProduct)
YourProductRouter.get('/delete-your-product/:id', deleteYourProduct)

module.exports = YourProductRouter 