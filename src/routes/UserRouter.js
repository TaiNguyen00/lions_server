import express from "express"
import routerRoom from './RoomRouter'
import routerPackage from './PackageRouter'
import { deleteUser, editUser, getAllUser, loginUser, registerUser } from "../controllers/UserController"


const router = express.Router();


router.use(routerRoom)
router.use(routerPackage)
// test API
router.get("/user", getAllUser);
router.post('/register', registerUser)
router.post('/login', loginUser)
router.put('/edit-user/:id', editUser)
router.delete('/delete/:id', deleteUser)




module.exports = router 