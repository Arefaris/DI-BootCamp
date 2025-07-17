//exersice 1
//server.js
import express from "express"
import {router} from "../xp1/routes/postsRoute.js"

const app = express()
const PORT = 3000

app.use(express.json())

app.use("/", router)

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, ()=>{
    console.log("listening on a port" + PORT)
})


// controllers/postConroller.js
import { db } from "../models/pg.js"

export const allPosts = async (req, res)=>{
    const rows = await db('posts')
    .select('title', 'content')

    res.json(rows)
    console.log(rows)
}

export const getPost = async (req, res)=>{
    const {id} = req.params
    if (!id) {
        res.status(404).json({message: "Post was not found"})
        return
    }
    const rows = await db('posts')
    .select('title', 'content')
    .where('id', '=', id)
    res.json(rows)
}

export const createPost = async (req, res)=> {
    const {title, content} = req.body
    const rows = await db('posts')
    .insert({title: title, content: content})
    res.json(rows)
}

export const updatePost = async (req, res)=> {
    const {id} = req.params
    const {title, content} = req.body

    if (!id) {
        res.status(404).json({message: "Post was not found"})
        return
    }else if (!title || !content){
        res.status(404).json({message: "Please provide full post, title or content are missing"})
        return
    }

    const rows = await db('posts')
    .update({title: title, content: content})
    .where("id", "=", id)
    
    res.json({message: "Post was updated"})
}

export const deletePost = async(req, res)=> {
    const {id} = req.params
    if (!id) {
        res.status(404).json({message: "Post was not found"})
    }
    const rows = await db('posts').del()
    .where("id", '=', id)

    res.json({message: "post was deleted"})
}


//routes/postsRoute.js
import { Router } from "express";
import {allPosts, getPost, createPost, updatePost, deletePost} from "../controllers/postsController.js"

export const router = Router()

router.get("/posts", allPosts)

router.get("/posts/:id", getPost)

router.post("/posts", createPost)

router.put("/posts/:id", updatePost)

router.delete("/posts/:id", deletePost)


//models/pg.js
import knex from "knex"

export const db = knex({
    client: "pg",
    connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        database: "postgres",
        password: "admin",
    }
})

//exersice 2
//controllers/bookController.js
import { db } from "../models/pg.js"

export const allBooks = async (req, res)=>{
    const rows = await db('books')
    .select('title', 'content', 'author', 'publishedYear')

    res.json(rows)
    console.log(rows)
}

export const getBooks = async (req, res)=>{
    const {id} = req.params
    if (!id) {
        res.status(404).json({message: "Book was not found"})
        return
    }
    const rows = await db('books')
    .select('title', 'content', 'author', 'publishedYear')
    .where('id', '=', id)
    res.json(rows)
}

export const createBook = async (req, res)=> {
    const {title, content, author, publishedYear} = req.body
    const rows = await db('books')
    .insert({title: title, content: content, author: author, publishedYear: publishedYear})
    res.json(rows)
}

export const updateBook = async (req, res)=> {
    const {id} = req.params
    const {title, content, author, publishedYear} = req.body

    if (!id) {
        res.status(404).json({message: "Book was not found"})
        return
    }else if (!title || !content || author || publishedYear){
        res.status(404).json({message: "Please provide full book, values are missing"})
        return
    }

    const rows = await db('books')
    .update({title: title, content: content, author: author, publishedYear: publishedYear})
    .where("id", "=", id)
    
    res.json({message: "Book was updated"})
}

export const deleteBook = async(req, res)=> {
    const {id} = req.params
    if (!id) {
        res.status(404).json({message: "Book was not found"})
    }
    const rows = await db('Books').del()
    .where("id", '=', id)

    res.json({message: "Book was deleted"})
}

//models/pg.js
import knex from "knex"

export const db = knex({
    client: "pg",
    connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        database: "postgres",
        password: "admin",
    }
})

//routes/postsRoute.js
import { Router } from "express";
import {allBooks, getBooks, createBook, updateBook, deleteBook} from "../controllers/bookController.js"

export const router = Router()

router.get("/books", allBooks)

router.get("/books/:id", getBooks)

router.post("/books", createBook)

router.put("/books/:id", updateBook)

router.delete("/books/:id", deleteBook)

//server.js
import express from "express"
import {router} from "./routes/postsRoute.js"

const app = express()
const PORT = 5000

app.use(express.json())

app.use("/api/", router)

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, ()=>{
    console.log("listening on a port" + PORT)
})