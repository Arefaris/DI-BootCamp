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