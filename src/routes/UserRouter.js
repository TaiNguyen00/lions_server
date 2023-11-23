import express from "express"
import { UpdateUserByPackage, createAccountManageForUser, deleteUser, editUser, getAccountsManage, getAllUser } from "../controllers/UserController"
import { VerifyUser, VerifyAdmin } from "../middlewares/VerifyToken";

const router = express.Router();


// test API
router.get("/", VerifyAdmin, getAllUser);
// router.get("/", getAllUser);
router.put('/edit-user/:id', VerifyUser, editUser)
router.delete('/delete/:id', VerifyUser, deleteUser)
router.put('/update-package/:id', VerifyUser, UpdateUserByPackage)

// for manager 
router.post('/create-account-management', createAccountManageForUser)
router.get("/get-all-accountsmanage", getAccountsManage)

// router api delemany 




module.exports = router 