import React, { useState } from 'react'
import { useBookSelector, useBookFantasySelector, useBookHorrorSelector, useScienceFictionBooks } from './hooks'

export default function BookList() {

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
