import {db} from '../config/neonPGDB.js';
import bcrypt from 'bcrypt';

export const createUser = async (user)=>{
    const {username, password, email, first_name, last_name} = user

    const trx = await db.transaction();

    try {
        const [user] = await trx('users')
        .insert({email, username, first_name, last_name}, ["id"])
        
        const hashPassword = await bcrypt.hash(password + "")
        await trx("hashpwd").insert({
            username: user.username,
            password: hashPassword
        })
        await trx.commit()

        return user
    }catch (error){
        await trx.rollback()
        throw error
    }
}

export const login = async(user)=>{
    const {email, password} = user

    const trx = await db.transaction();

    try {
        const [user] = await trx('users')
        .select("email")
        .where("emai", "=", email)

        
    }catch (error){
        await trx.rollback()
        throw error
    }
}

export const getUserByEmail = async(email) =>{
    try {
        
    }
}