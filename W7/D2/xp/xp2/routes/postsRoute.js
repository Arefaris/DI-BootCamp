import { Router } from "express";
import {allBooks, getBooks, createBook, updateBook, deleteBook} from "../controllers/bookController.js"

export const router = Router()

router.get("/posts", allBooks)

router.get("/posts/:id", getBooks)

router.post("/posts", createBook)

router.put("/posts/:id", updateBook)

router.delete("/posts/:id", deleteBook)