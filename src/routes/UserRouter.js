import express from "express"
import { UpdateUserByPackage, checkIsFirstLoginToManagePage, createAccountManageForUser, deleteUser, editUser, getAccountById, getAccountsManage, getAccountsManageByUserId, getAllUser } from "../controllers/UserController"
import { VerifyUser, VerifyAdmin } from "../middlewares/VerifyToken";

const router = express.Router();


// test API
router.get("/getAll", VerifyUser, getAllUser);
router.put('/edit-user', editUser)
router.delete('/delete/:id', VerifyUser, deleteUser)
router.put('/update-package', UpdateUserByPackage)

// for manager 
router.post('/create-account-management', createAccountManageForUser)
router.get("/get-all-accountsmanage", getAccountsManage)
router.post("/check-login-accountmanage", checkIsFirstLoginToManagePage)
router.post("/get-byID", getAccountById)

// router api delemany 




module.exports = router 