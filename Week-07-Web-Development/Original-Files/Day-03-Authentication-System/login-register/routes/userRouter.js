import {Router} from 'express'

import {
    getAllusers,
    getUserById,
    registerUser,
    updateUser,
    loginUser
} from "..controllers/usercontroller.js"


const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/users", registerUser)
router.get("/users:id", loginUser)
