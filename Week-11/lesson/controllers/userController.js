const userModel = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
    registerUser: async(req, res) => {
        const {password, email} = req.body
        // 1hour 3 min mark https://octopus.developers.institute/courses/collection/131/course/712/section/816/chapter/2890
        try { 
            const user = await userModel.createUser(password, email)
        } catch (error) {
            console.log(error)
            res.status(500).json({message})
        }
    }
}