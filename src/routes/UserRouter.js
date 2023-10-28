import express from "express"
import { deleteUser, editUser, getAllUser } from "../controllers/UserController"
import { VerifyUser, VerifyAdmin } from "../middlewares/VerifyToken";

const router = express.Router();


// test API
router.get("/", VerifyAdmin ,getAllUser);
router.put('/edit-user/:id', VerifyUser, editUser)
router.delete('/delete/:id', VerifyUser,deleteUser)

// router api delemany 




module.exports = router 