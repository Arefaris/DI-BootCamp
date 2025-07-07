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