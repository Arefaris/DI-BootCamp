import { useRef, useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { ReactNode } from "react"
import reactLogo from './src/assets/react.svg'
import viteLogo from '/vite.svg'
import './src/App.css'
import './src/index.css'

// Types.tsx
export type Book = {
    id: number,
    title: string,
    author: string,
}

// List.tsx
type ListProps<T> = {
    items: T[],
}

export const List = <T extends object>({ items }: ListProps<T>) => {

    const renderItem = (item: T | Book) => {
        if ("id" in item && "title" in item && "author" in item){
             return (
            <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.author}</div>
            </div>)

        } else{
            return <div>Unknow Type</div>
        }
       
    }

    return (<div>
        {items.map((item, index)=> {
            return <div key={index}>
                        {renderItem(item)}
                    </div>
        })}
        
    </div>
    )
 }

// BookApp.tsx
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

// App.tsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BookApp />
    </>
  )
}

// main.tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default App