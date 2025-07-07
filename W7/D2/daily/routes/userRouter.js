import { Router } from "express"
import {register, login, getAllUsers, getUser, updateUser} from "../controllers/userController.js"

export const userRouter = Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/users", getAllUsers)
userRouter.get("/users/:id", getUser)
userRouter.put("/users/:id", updateUser)