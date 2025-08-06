const userModel = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
    registerUser: async(req, res) => {
        const {password, email} = req.body
        

        try { 
            const user = await userModel.createUser(password, email)

            res.status(201).json({
                message: "user registered succefully",
                user
            })

        } catch (error) {
            console.log(error)

            if(error.code === "23505"){
                res.status(404).json({message: "User already exist"})
            }
            res.status(500).json({message})
        }
    },

    loginUser: async (req, res) => {
        const {email, password} = req.body

        try {
            const user = await userModel.getUserByEmail(email)

            if(!user) {
                res.status(404).json({message: 
                    "User not found"
                })
                return
            }

            const match = await bcrypt.compare(password+"", user.password)

            if (!match) {
                 res.status(404).json({message: 
                    "Wrong password"
                })
                return
            }

            // generate token
            const ACCES_TOKEN_SECRET = process.env.ACCES_TOKEN_SECRET

            const accessToken = jwt.sign(
                {userid: user.id, email: user.email},
                ACCES_TOKEN_SECRET,
                {expiresIn: "60s"}
            )

            // set token on HttpOnlyCokie
            res.cookie("token", accessToken, {
                maxAge: 60 * 1000,
                httpOnly: true,
            })


            // response with token

            res.status(200).json({
                message: 'Login successfully',
                user: {userid: user.id, email: user.email, user: "active"},
                // we dont have to send it back
                token: accessToken
            })


        }catch (error) {
            console.log(error)
            res.status(500).json({message: "internal server error"})
        }
    },

    getAllusers: async (req, res) => {
        try {
            const users = await userModel.getUsers()
            res.json(users)
        }catch (error){
            console.log(error)
        }
    },

    logOutUser: (req, res) => {
        res.clearCookie("token");
        req.cookies["token"] = null
        delete req.cookies["token"]
        req.user = null

        //if you put token in db, set null in db
        
        res.sendStatus(200)
    },

    verifyAuth: (req, res) => {
        const {userid, email} = req.user
        const {ACCES_TOKEN_SECRET} = process.env

        const newToken = jwt.sign({userid, email}, ACCES_TOKEN_SECRET, {
            expiresIn: "60s"
        })

        res.cookie("token", newToken, {
            maxAge: 60 * 1000,
            httpOnly: true
        })

        res.status(200).json({
            message: "new token",
            user: {userid, email},
            token: newToken
        })

    }
}