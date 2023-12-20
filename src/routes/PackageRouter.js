import { Router } from "express";
import { addPackage, editPackage, getAllPackage, getPackageById } from "../controllers/PackageController";
import { VerifyUser, VerifyAdmin } from "../middlewares/VerifyToken";

const packageRouter = Router()

packageRouter.get('/getAll', getAllPackage)
packageRouter.get('/getID/:id', getPackageById)
packageRouter.post('/package-add', addPackage)
packageRouter.put('/package-edit', editPackage)

module.exports = packageRouter