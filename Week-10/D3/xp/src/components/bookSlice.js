import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
    {
        "id": 0,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Fiction"
    },
    {
        "id": 1,
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian"
    },
    {
        "id": 2,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance"
    },
    {
        "id": 3,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy"
    },
    {
        "id": 4,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "genre": "Horror"
    },
    {
        "id": 5,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Tragedy"
    },
    {
        "id": 6,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "genre": "Adventure"
    },
    {
        "id": 7,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Science Fiction"
    },
    {
        "id": 8,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genre": "Science Fiction"
    },
    {
        "id": 9,
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "genre": "Science"
    }
]

}


const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {}
})


export const state = (state) => state.bookSliceReducer
export default bookSlice.reducer