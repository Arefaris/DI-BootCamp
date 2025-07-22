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
