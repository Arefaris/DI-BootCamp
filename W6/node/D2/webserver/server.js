const express = require('express')
const {users} = require('./models/data.js')
const app = express()

const PORT = 3001
app.listen(PORT, ()=> {
    console.log(`run on ${PORT}`)
})

//middle ware - bodyparser for post
// body parser
// json 
app.use(express.json())

// req - request
// res - response
// if json res.json

// (C)R(U)(D) - Read - GET - get all users //
app.get('/users', (req, res)=> {
    res.send(users)
})

app.get('/userdata', (req, res)=>{
    res.send(users)
})

// app.use(express.urlencoded())

// CREATE 
app.post('/users', (req, res)=>{
    console.log(req.body)
    const {name, email} = req.body
    const newUser = {name, email, id: users.length + 1}
    users.push(newUser)
    res.json({message: 'all done'})
})

//PARAMS
app.get('/users/:id/:name', (req, res)=>{
    const {id} = req.params
    const user = users.find(item => item.id == id)

    if(!user) {
        res.status(404).json({message: 'User not found'})
        //res.sendStatus(401)
    }
    console.log(req)
    res.json(users)
})

// CRUD - SEARCH USERS
app.get('/search', (req, res) => {
    const {name} = req.query

    const filteredUsers = users.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    if (filteredUsers.length === 0){
        res.status(404).json({message: 'no user match your search'})
        return
    }

    console.log(req.query)
    res.json(filteredUsers)
})

//

// middleware - function
app.use('/', express.static(__dirname + '/public'))
/**
 * app.get
 * app.post
 * app.delete
 * app.put
 */

// API - Aplication program interface
// System communication between apps


// CRUD - Create, read, update, delete
// RESTful API
// Create - POST
// Read - GET
// Update - PUT
// DELETE - Delete

/**
 * /users -GET - get all users/ one user
 * /users -POST - create new user
 * /users -PUT - update a user
 * /users -DELETE - delete a user
 */