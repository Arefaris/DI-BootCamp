//EX1
//ROUTES/index.js
import { Router } from "express";

export const router = Router()

router.get("/homepage", (req, res)=>{
    res.json("homepage")
})
router.get("/about", (req, res)=>{
    res.json("about")
})


//app.js
import express from "express";
import { router } from "./routes/index.js";


const app = express()
const PORT = 3000

app.use("/", router)

app.listen(PORT, ()=>{
    console.log("Listining on port: " + PORT)
})

//xp2
//routes/todos.js
import { Router } from "express";

export const router = Router()

let todos = [
];

router.get("/todos", (req, res)=>{
    res.json(todos)
})

router.post("/todos", (req, res)=>{
    const {task} = req.body

    todos.push({
        id: todos.length + 1,
        task: task
    })

    res.json(todos)

})

router.put("/todos/:id", (req, res)=>{
    const {id} = req.params
    const {task} = req.body

    const index = todos.findIndex(task => task.id == id)
    if (index === -1) {
        res.status(404).json("user not found")
    }

    todos[index] = {...todos[index], task}

    res.json(todos)

})

router.delete("/todos/:id", (req, res)=>{
    const {id} = req.params

    const index = todos.findIndex(task => task.id == id)
    if (!index) {
        res.status(404).json("user not found")
    }

    todos.splice(index, 1)

    res.json(todos)

})


//app.js
import express from "express";
import { router } from "./routes/todos.js";

const app = express()
const PORT = 3000
app.use(express.json());
app.use("/", router)

app.listen(PORT, ()=>{
    console.log("Listining on port: " + PORT)
})

//xp3
//books.js
import { Router } from "express";

export const router = Router()

let books = [
];

router.get("/books", (req, res)=>{
    res.json(books)
})

router.post("/books", (req, res)=>{
    const {title} = req.body

    books.push({
        id: books.length + 1,
        title: title
    })

    res.json(books)

})

router.put("/books/:id", (req, res)=>{
    const {id} = req.params
    const {title} = req.body

    const index = books.findIndex(book => book.id == id)
    if (index === -1) {
        res.status(404).json("book was not found")
    }

    books[index] = {...books[index], title}

    res.json(books)

})

router.delete("/books/:id", (req, res)=>{
    const {id} = req.params

    const index = books.findIndex(book => book.id == id)
    if (!index) {
        res.status(404).json("book was not found")
    }

    books.splice(index, 1)

    res.json(books)

})

//app.js

import express from "express";
import { router } from "./routes/books.js";

const app = express()
const PORT = 3000
app.use(express.json());
app.use("/", router)

app.listen(PORT, ()=>{
    console.log("Listining on port: " + PORT)
})