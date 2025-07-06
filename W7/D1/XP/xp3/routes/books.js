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

