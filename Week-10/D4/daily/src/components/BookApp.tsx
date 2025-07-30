import { useRef, useState } from "react"
import type{ Book } from "../Types"

import { List } from "./List"

export const BookApp = ()=> {
    const [books, setBooks] = useState<Book[]>([{
        id: 0,
        title: "Harry Potter",
        author: "Joan Rolling",
    },
    {
        id: 1,
        title: "Totter Potter",
        author: "Moalin Rolling",
    }])

    const inputTitleRef = useRef<HTMLInputElement>(null)
    const inputAuthorRef = useRef<HTMLInputElement>(null)

    const addBook = ()=>{
        const title = inputTitleRef.current?.value
        const author = inputAuthorRef.current?.value
        if (title && author)
        setBooks(prev => [...prev, {id: prev.length, title, author}])
    }

    return <>
        <input ref={inputTitleRef} placeholder="Title"></input><br></br>
        <input ref={inputAuthorRef} placeholder="Author" />
        <button onClick={addBook}>ADD BOOK</button>
        <List items={books}/>
    </>
}