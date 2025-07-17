import { Router } from "express";
import {allPosts, getPost, createPost, updatePost, deletePost} from "../controllers/postsController.js"

export const router = Router()

router.get("/posts", allPosts)

router.get("/posts/:id", getPost)

router.post("/posts", createPost)

router.put("/posts/:id", updatePost)

router.delete("/posts/:id", deletePost)