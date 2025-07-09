import { Request, Response } from "express"
import { createUser, login, getUsers, getOneUser, upUser} from "../models/userModel.ts"

// POST
export const registerUser = async (req: Request, res: Response)=>{
    const {firstname, lastname, email, username, password} = req.body
    console.log(firstname, lastname, email, username, password)
    if(!username || !password){
        res.status(500).json({message: "Please provide username and password"})
    }else if (!firstname || !lastname || !email) {
         res.status(500).json({message: "Please provide personal data"})
    }

    const user = await createUser(firstname, lastname, email, username, password)
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
   

    const {firstname, lastname, email, username, password} = req.body

    if(!username || !password){
        res.status(500).json({message: "Please provide username and password"})
    }else if (!firstname || !lastname || !email) {
         res.status(500).json({message: "Please provide personal data"})
    }

    const user = await upUser(id, firstname, lastname, email, username, password)
    res.status(user.status).json(user)
}