import {db} from "../config/neonDB.ts"
import bcrypt from "bcrypt"

type user = {
    id: number,
    username: string,
    password: string
}

export const createUser = async (username: string, password: string)=>{
    const trx = await db.transaction()

    try {
        let user: user
        [user] = await trx("users")
        .insert({username: username.toLowerCase()})
        .returning(["id", "username", "id"])

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

        let user: user
        [user] = await trx("users")
        .select("users.username", "hashpsw.password")
        .where({username: username.toLowerCase()})
        .join("hashpsw", "users.id", "=", "hashpsw.user_id")
        .returning(["username", "password", "id"])
    
    if(user){
        const result = await bcrypt.compare(password, user.password)
        if(result){
            return {message: "login succefull", status: 200}
        }else{
            return {message: "Wrong login or password", status: 401}
        }
    }else{
        return {message: "Username is not registered", status: 401}
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
            "username"
        )
        .returning(["id", "username"])
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
            "username"
        )
        .where({id})
        .returning(["id", "username"])

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

export const upUser = async(id: string, username: string, password: string)=>{
    const trx = await db.transaction()
    
    try{
        
        const user = await trx("users")
        .where({id})
        .update(
            {
                username
            }
        )
        .returning(["id", "username"])

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