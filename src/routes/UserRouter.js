import express from "express"
import { deleteUser, editUser, getAllUser } from "../controllers/UserController"
import { VerifyUser } from "../middlewares/VerifyToken";

const router = express.Router();


// test API
router.get("/", VerifyUser ,getAllUser);
router.put('/edit-user/:id', editUser)
router.delete('/delete/:id', deleteUser)




module.exports = router 