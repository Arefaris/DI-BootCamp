import { Request, Response } from "express"

// POST
export const registerUser = (req: Request, res: Response)=>{
    console.log("regester user")
}

// POST
export const loginUser = (req: Request, res: Response)=>{
    console.log("login user")
}

// GET
export const getAllUsers = (req: Request, res: Response)=>{
    console.log("all users")
}

// GET
export const getUser = (req: Request, res: Response)=>{
    console.log("one user")
}

// PUT
export const updateUser = (req: Request, res: Response)=>{
    console.log("Update user")
}