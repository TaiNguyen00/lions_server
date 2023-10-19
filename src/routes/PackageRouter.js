import { Router } from "express";
import { addPackage, editPackage, getAllPackage } from "../controllers/PackageController";

const packageRouter = Router()

packageRouter.get('/package', getAllPackage)
packageRouter.post('/package-add', addPackage)
packageRouter.put('/package-edit/:id', editPackage)

module.exports = packageRouter