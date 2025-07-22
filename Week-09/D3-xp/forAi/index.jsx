//App.jsx

import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import Main from './components/main'
import Counter from './components/counter'

export const themeContext = createContext()
function App() {
  
  const [theme, setTheme] = useState('light')
  const [number, setNumber] = useState(0)

  return (
    <>
    <themeContext.Provider value={{ theme, setTheme }}>
        <Main />
        <Counter number={number} setNumber={setNumber} />
    </themeContext.Provider>
    </>
  )
}

export default App

// Main.jsx

import { themeContext } from "../App";
import { useContext } from "react";



const Main = () => {
  const theme = useContext(themeContext);  
  console.log(theme);
  return (
    <div className={`main ${theme.theme}`} style={theme.theme === 'dark' ? { backgroundColor: '#333', color: '#fff' } : { backgroundColor: '#fff', color: '#000' }}>
      <h2>Main Component</h2>
      <button onClick={() => theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );

  
}

export default Main;

// Counter.jsx
import { useRef } from "react"
const Counter = ({number, setNumber }) => {
    const inputRef = useRef(0);

    const handleChange = () => {
        setNumber(inputRef.current.value.length);
    }
    return <>
            <h1>{number}</h1>
            <input ref={inputRef} onChange={handleChange}></input>
        </>
}

export default Counter