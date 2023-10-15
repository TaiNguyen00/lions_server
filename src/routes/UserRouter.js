import express from "express"
import routerRoom from './RoomRouter'
import { deleteUser, editUser, getAllUser, loginUser, registerUser } from "../controllers/UserController"
import { addRoom, deleteRoom, editRoom, getAllRoom } from "../controllers/RoomController";


const router = express.Router();


router.use(routerRoom)
// test API
router.get("/user", getAllUser);
router.post('/register', registerUser)
router.post('/login', loginUser)
router.put('/edit-user/:id', editUser)
router.delete('/delete/:id', deleteUser)




module.exports = router 