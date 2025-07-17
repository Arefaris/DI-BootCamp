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