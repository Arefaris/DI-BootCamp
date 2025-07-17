// server.ts
import e from "express";
import {userRouter} from "./routes/userRoutes.ts"
import path from "path"

const app = e()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

app.use(e.json())
app.use("/api/", userRouter)

app.use("/", e.static(__dirname + "/public"))

app.listen(PORT, ()=>{
    console.log("Running on port: " + PORT)
})

// routes/userRoutes.ts
import {registerUser, loginUser, getAllUsers, getUser, updateUser} from "../controllers/userController.ts"
import { Router } from "express"

export const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/users", getAllUsers)
userRouter.get("/users/:id", getUser)
userRouter.put("/users/:id", updateUser)

// config/neonDB.ts
import knex from "knex";
import dotenv from "dotenv"
dotenv.config()

const { PGHOST, PGDATABASE, PGPASSWORD, PGUSER } = process.env;

if (!PGHOST || !PGDATABASE || !PGPASSWORD ||!PGUSER) {
    throw new Error("Provide database details in your .env file")
}

export const db = knex({
    client: "pg",
    connection: {
        host: PGHOST,
        port: Number(process.env.PORT || 5432),
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false}
    }
}
    
)

//controllers/userController.ts
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

//models/userModel.ts
import {db} from "../config/neonDB.ts"
import bcrypt from "bcrypt"


export const createUser = async (firstname: string, lastname: string, email: string, username: string, password: string)=>{
    const trx = await db.transaction()

    try {
        
        const [user] = await trx("users")
        .insert({firstname, lastname, email: email.toLowerCase(), username: username.toLowerCase()})
        .returning(["id", "firstname", "lastname", "email", "username"])

        //hashing password before inserting
        const hashPassword = await bcrypt.hash(password + "", 10);

        await trx("hashpsw")
        .insert({password: hashPassword, user_id: user.id})

        await trx.commit()
        return {message: `User ${user.username} with an id ${user.id} was registered succesfully`, status: 200}
       
    }catch (error: any){
         await trx.rollback()

         if (error.code === "23505"){
            return {message: `Username ${username} already exists`, status: 409}
         }else {
            console.log(error)
            return {message: "Internal server error", status: 500}
         }
        
    }
  
}

export const login = async(username: string, password: string)=>{
    
    try {

        const trx = await db.transaction()

        
        const [user] = await trx("users")
        .select("users.username", "hashpsw.password")
        .where({username: username.toLowerCase()})
        .join("hashpsw", "users.id", "=", "hashpsw.user_id")
        .returning(["username", "password", "id"])
    
    if(user){
        const result = await bcrypt.compare(password, user.password)
        if(result){
            return {message: `Hi ${username} welcome back`, status: 200}
        }else{
            return {message: "Wrong login or password", status: 401}
        }
    }else{
        return {message: "Username is not registered", status: 404}
    }
    
    }catch (error: any){
        console.log(error)
        return {message: "Iternal server error", status: 500}
    }

}

export const getUsers = async ()=>{
    try{
        const user = await db("users")
        .select(
            "id", 
            "firstname", 
            "lastname", 
            "email", 
            "username"
        )
        .returning(["id", "firstname", "lastname", "email", "username"])
        return {message: user, status: 200}

    }catch(error){
        return {message: error, status: 500}
    }
    
}

export const getOneUser = async (id: string)=>{
    try{
        const user = await db("users")
        .select(
            "id", 
            "firstname", 
            "lastname", 
            "email", 
            "username"
        )
        .where({id})
        .returning(["id", "firstname", "lastname", "email", "username"])

        if(user.length === 0){
            return {message: "User not found", status: 404}
        }else {
            return {message: user, status: 200}
        }
        

    }catch(error){
        console.log(error)
        return {message: error, status: 500}
    }   
}

export const upUser = async(id: string, firstname: string, lastname: string, email: string, username: string, password: string)=>{
    const trx = await db.transaction()
    
    try{
        
        const user = await trx("users")
        .where({id})
        .update(
            {
                firstname,
                lastname, 
                email,
                username

            }
        )
        .returning(["id", "firstname", "lastname", "email", "username"])

        const hashPassword = await bcrypt.hash(password + "", 10);

        await trx("hashpsw")
        .where({user_id: id})
        .update(
            {password: hashPassword}
        )

        if(user.length === 0){
            await trx.rollback()
            return {message: "User not found", status: 404}
            
        }else {
            await trx.commit()
            return {message: user, status: 200}
        }
        

    }catch(error){
        await trx.rollback()
        console.log(error)
        return {message: error, status: 500}
    }   
}

//public/login/index.ts
const loginForm = document.querySelector("form") as HTMLFormElement
const logiNresult = document.querySelector(".result") as HTMLDivElement

loginForm.addEventListener("submit", async (event)=>{
    event.preventDefault()

    const elements = loginForm.elements
    const login = elements.namedItem("login") as HTMLInputElement;
    const password = elements.namedItem("password") as HTMLInputElement;

    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: login.value,
            password: password.value
        })
    })
    
    const data = await response.json()
    
    if (data.status == 200){
        logiNresult.textContent = data.message
    }else if (data.status == 401){
        logiNresult.textContent = data.message
    }else if (data.status == 404){
        logiNresult.textContent = data.message
    }else {
        logiNresult.textContent = "Something went wrong. Server responded with status: " + data.status
    }

})

//public/register/index.ts
const registerForm = document.querySelector("form") as HTMLFormElement
const result = document.querySelector(".result") as HTMLDivElement

registerForm.addEventListener("submit", async (event)=>{
    event.preventDefault()
    const elements = registerForm.elements
    const firstname = elements.namedItem("name") as HTMLInputElement;
    const lastName = elements.namedItem("lastName") as HTMLInputElement;
    const email = elements.namedItem("email") as HTMLInputElement;
    const username = elements.namedItem("username") as HTMLInputElement;
    const password = elements.namedItem("password") as HTMLInputElement;

    const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastName.value,
            email: email.value,
            username: username.value, 
            password: password.value
        })
    })

    const data = await response.json()
    
    if (data.status == 200){
        result.textContent = data.message
    }else if (data.status == 409){
        result.textContent = "Username already exists"
    }else {
        result.textContent = "Something went wrong. Server responded with status: " + data.status
    }

})