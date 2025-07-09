import {db} from "../config/neonDB.ts"
import bcrypt from "bcrypt"

export const createUser = async (username: string, password: string)=>{
    const trx = await db.transaction()

    try {
        const [user] = await trx("users")
        .insert({username: username.toLowerCase()})
        .returning(["id", "username"])

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
    console.log(username, password)

    try {
    const trx = await db.transaction()
    const [user] = await trx("users")
    .select("users.username", "hashpsw.password")
    .join("hashpsw", "users.id", "=", "hashpsw.user_id")
    .returning("*")

    console.log(user)
    return user
    }catch (error: any){
        console.log(error)
    }
    return {message: username, password}
}