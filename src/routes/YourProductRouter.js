import { Router } from "express";
import { addYourProduct, deleteYourProduct, getAllYourProduct } from "../controllers/YourProductController";

const YourProductRouter = Router()

YourProductRouter.get('/', getAllYourProduct)
YourProductRouter.post('/add-your-product', addYourProduct)
YourProductRouter.get('/delete-your-product/:id', deleteYourProduct)

module.exports = YourProductRouter 