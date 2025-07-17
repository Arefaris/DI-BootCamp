import bcrypt from "bcrypt"
import {db} from "../models/pg.js"

const saltRounds = 10;

export const register = async(req, res)=>{
    const {username, password, email, first_name, last_name} = req.body
    if (!username || !password){
        res.status(404).json({message: "Please provide username and password"})
        return
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err){
            console.log(err)
            res.json(err)
            
            return
        }

        await db.transaction(async (trx)=> {
            const rows = await trx("users")
            .insert({email: email, username: username, first_name: first_name, last_name: last_name})
            .returning("id")

            const id = rows[0]["id"]
            console.log(id)
            await trx("hashpwd")
            .insert({username: username, password: hash, user_id: id})

        })
    });
    res.json({message: "user was regestered succesfully"})
}


export const login = async(req, res)=>{
    const {username, password} = req.body

     if (!username || !password){
        res.status(404).json({message: "Please provide username and password"})
        return
    }

    await db.transaction(async (trx)=> {
            
        const rows = await trx("hashpwd")
        .select("password")
        .where("username", "=", username)

        if (!rows){
            res.status(404).json({message: "couldnt find user"})
            return
        }

        const hash = rows[0]["password"]

        bcrypt.compare(password, hash, function(err, result) {
            if(err){
                console.log(err)
                return
            }

            if (result){
                res.json({message: "loggin was succeful"})
            }else {
                res.json({message: "wrong password or login"})
            }
        });
        
    })

    

}

export const getAllUsers = async(req, res)=>{
    const rows = await db("users")
    .select("email", "username", "first_name", "last_name")
    res.json(rows)
}

export const getUser = async(req, res)=>{
    const {id} = req.params
    if(!id){
        res.json({message: "Please provide id"})
        return
    }

    const rows = await db("users")
    .select("email", "username", "first_name", "last_name")
    .where("id", "=", id)

    res.json(rows)
}

export const updateUser = async(req, res)=>{
    const {id} = req.params
    const {email, username, first_name, last_name, password} = req.body

    if(!id){
        res.json({message: "Please provide id"})
        return
    }

             bcrypt.hash(password, saltRounds, async(err, hash) => {

                if(err){
                    console.log(err)
                    return
                }
                    await db.transaction(async (trx)=> {
                    
                    const rows = await trx("users")
                    .update({email: email, username: username, first_name: first_name, last_name: last_name})
                    .where("id", "=", id)
                    
                    if (!rows){
                    res.json({message: "no such user"})
                    return
                    }

                    await trx("hashpwd")
                    .update({password: hash})
                    .where("user_id", "=", id)
                    res.json({message: "user was updated"})

                
                    })
                
            });
            
   
}