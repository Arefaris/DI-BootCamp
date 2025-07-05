//blog api
const express = require('express')
const app = express()

app.use(express.json())

const data = [{
    id: "0",
    title: "hello",
    content: "my name is borya"
}, 
{
    id: "1",
    title: "How to make money",
    content: "1. Work"
}, 
{
    id: "2",
    title: "Best food on earth",
    content: "Shaurma"
}, 
{
    id: "3",
    title: "Best AIs on the market",
    content: "Chat gpt, gemini, claude"
} ]

app.get("/posts", (req, res)=>{
    console.log(req)
    res.json(data)
})

app.get("/posts/:id", (req, res)=>{
    
    const {id} = req.params 
    const post = data.find(item => item.id === id)

    if (!post) {
        res.status(404).json({message: 'Post not found'})
    }
    res.json(post)
})

app.post('/posts', (req, res)=>{
    const {title, content} = req.body
    const newPost = {
        id: data.length + 1,
        title: title,
        content: content
    }
    data.push(newPost)
    res.json(data)
})

app.put('/posts/:id', (req, res)=> {
    const {id} = req.params
    const {title, content} = req.body
    data.forEach((post)=> {
        if (post.id === id){
            post.title = title,
            post.content = content
        }
    })

    res.json(data)
})

app.delete('/posts/:id', (req, res)=> {
    const {id} = req.params
    const newData = data.filter(post => post.id != id)
    res.json(newData)
})

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(PORT)
})


// book api

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813
  }
];


import express from 'express'

const app = express()

const PORT = 5000

app.use(express.json())

app.listen(PORT, (req, res)=>{
    console.log("Listening on port:" + PORT)
})

app.get("/api/books", (req, res)=>{
    res.json(books)
})

app.get("/api/books/:bookId", (req, res)=> {
    const {bookId} = req.params
    const book = books.filter(book => book.id == bookId)
    if (book.length === 0){
        res.status(404).json({message: "book not found"}) 
    } else {
        res.status(200).json(book)
    }
})

app.post("/api/books", (req, res)=>{
    const {title, author, publishedYear} = req.body

    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        publishedYear: publishedYear
    }

    books.push(newBook)

    res.json(books)
})


// crud api
import express from 'express'
import { fetchPosts } from './data/dataService.js'

const app = express()

const PORT = 5000


app.get('/posts', async (req, res) => {
    const posts = await fetchPosts()
    res.send(posts)
    console.log('Data was recived, and response was sent succesufuly')
})

app.listen(PORT, (req, res) => {
    console.log('Listening on the port: ' + PORT)
})


//dataService.js
import axios from "axios";



export const fetchPosts = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return posts.data
}