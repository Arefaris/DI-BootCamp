import { Request, Response } from "express"
import { createUser, login, getUsers, getOneUser, upUser} from "../models/userModel.ts"

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
    res.status(user.status).json(user)
}

// GET
export const getAllUsers = async (req: Request, res: Response)=>{
    const users = await getUsers()
    res.status(users.status).json(users)
}

// GET
export const getUser = async (req: Request, res: Response)=>{
    const {id} = req.params
    const user = await getOneUser(id)
    res.status(user.status).json(user)
}

// PUT
export const updateUser = async (req: Request, res: Response)=>{
    const {id} = req.params
    const {username, password} = req.body

    if(!username || !password || !id){
        res.status(500).json({message: "Please provide username and password and correct id"})
    }

    const user = await upUser(id, username, password)
    res.status(user.status).json(user)
}