import bcrypt from "bcrypt"
import { createUser } from "../models/userModel.js"

export const registerUser = async (req, res)=>{
    const {username, password, email, first_name, last_name} = req.body
    const user = {username, password, email, first_name, last_name}
    try {
        const user = await createUser({user})
        res.status(201).json({message: 'user registered succesfully'})
    }catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
}

export const loginUser = async (req, res)=>{
    res.send("login user")
}

export const getUserById = async (req, res)=>{
    res.send("get user by id")
}

export const getAllusers = async (req, res)=>{
    res.send("get user by id")
}

export const updateUser = async (req, res)=>{
    res.send("update user by id")
}
