import { Router } from "express";
import { addYourProduct, deleteYourProduct, getAllYourProduct, updateYourProduct } from "../controllers/YourProductController";

const YourProductRouter = Router()

YourProductRouter.get('/', getAllYourProduct)
YourProductRouter.post('/add-your-product', addYourProduct)
YourProductRouter.put('/edit-your-product', updateYourProduct)
YourProductRouter.get('/delete-your-product/:id', deleteYourProduct)

module.exports = YourProductRouter 