import React, { useState } from 'react';
import { createSlice, configureStore, createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// book slice
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

const state = (state) => state.bookSliceReducer
const bookSliceReducer = bookSlice.reducer

//SELECTORS
const selectBooks = createSelector(state, (state)=>{
    return state.books
})

const selectHorrorBooks = createSelector(state, (state)=>{
    return state.books.filter(book => book.genre === "Horror")
})

const selectFantasyBooks = createSelector(state, (state)=>{
    return state.books.filter(book => book.genre === "Fantasy")
})

const selectScienceFictionBooks = createSelector(state, (state)=>{
    return state.books.filter(book => book.genre === "Science Fiction")
})

//HOOKS
const useBookSelector = ()=>{
    return useSelector(selectBooks)
}

const useBookHorrorSelector = ()=>{
    return useSelector(selectHorrorBooks)
}

const useBookFantasySelector = ()=>{
    return useSelector(selectFantasyBooks)
}

const useScienceFictionBooks = ()=>{
    return useSelector(selectScienceFictionBooks)
}

// STORE 
const store = configureStore(
    {
        reducer: {
            bookSliceReducer,
        }
    }
)

// BOOK LIST COMPONENT 
function BookList() {
  const [genre, setGenre] = useState([])
  const books = useBookSelector()
  const fantasyBooks = useBookFantasySelector()
  const horrorBooks = useBookHorrorSelector()
  const scienceFictionBooks = useScienceFictionBooks()

  return (
    <>
        <label for="genre-select">Filter by genre</label><br></br>
        <select onChange={(e) => {

            if(e.target.value === "Fantasy"){
                setGenre(fantasyBooks)
            }else if (e.target.value === "Horror"){
                setGenre(horrorBooks)
            }else if (e.target.value === "Science Fiction"){
                setGenre(scienceFictionBooks)
            }else {
                setGenre(books)
            }

        }} name="" id="genre-select">
            <option>All</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Science Fiction</option>
        </select>
        
  
    {
        genre.map(book =>{
        return <div key={book.id}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.genre}</div>
        </div>
    })}
    </>
    
  )
}

//  APP COMPONENT 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookList />
    </>
  )
}

// ===== MAIN ENTRY POINT =====
// This would normally be in main.jsx
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>,
// )

