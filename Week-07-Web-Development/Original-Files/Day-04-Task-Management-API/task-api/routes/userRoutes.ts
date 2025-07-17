import {registerUser, loginUser, getAllUsers, getUser, updateUser} from "../controllers/userController.ts"
import { Router } from "express"

export const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/users", getAllUsers)
userRouter.get("/users/:id", getUser)
userRouter.put("/users/:id", updateUser)