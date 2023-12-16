import express from "express"
import { UpdateUserByPackage, checkIsFirstLoginToManagePage, createAccountManageForUser, deleteUser, editUser, getAccountsManage, getAllUser } from "../controllers/UserController"
import { VerifyUser, VerifyAdmin } from "../middlewares/VerifyToken";

const router = express.Router();


// test API
router.get("/get-all", getAllUser);
// router.get("/", getAllUser);
router.put('/edit-user/:id', VerifyUser, editUser)
router.delete('/delete/:id', VerifyUser, deleteUser)

// updatePackage when buy package
router.put('/update-package', UpdateUserByPackage)

// for manager 
router.post('/create-account-management', createAccountManageForUser)
router.get("/get-all-accountsmanage", getAccountsManage)
router.post("/check-login-accountmanage", checkIsFirstLoginToManagePage)

// router api delemany 




module.exports = router 