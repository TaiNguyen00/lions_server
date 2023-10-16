import { Router } from "express";
import { addPackage, editPackage, getAllPackage } from "../controllers/PackageController";

const routerPackage = Router()

routerPackage.get('/package', getAllPackage)
routerPackage.post('/package-add', addPackage)
routerPackage.put('/package-edit/:id', editPackage)

module.exports = routerPackage