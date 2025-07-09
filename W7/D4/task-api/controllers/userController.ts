import { Request, Response } from "express"
import { createUser, login} from "../models/userModel.ts"

// POST
export const registerUser = async (req: Request, res: Response)=>{
    const {username, password} = req.body

    if(!username || !password){
        res.status(500).json({message: "Please provide username and password"})
    }

    const user = await createUser(username, password)
    res.status(user.status).json(user)
}

// POST
export const loginUser = async (req: Request, res: Response)=>{
    const {username, password} = req.body

    if(!username || !password){
        res.status(500).json({message: "Please provide username and password"})
    }

    const user = await login(username, password)
    res.send(user)
}

// GET
export const getAllUsers = (req: Request, res: Response)=>{
    res.send("all users")
}

// GET
export const getUser = (req: Request, res: Response)=>{
    res.send("one user")
}

// PUT
export const updateUser = (req: Request, res: Response)=>{
    res.send("Update user")
}