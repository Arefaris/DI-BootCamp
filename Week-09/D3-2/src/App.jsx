import { useState } from 'react'
import Counter from './components/Counter'
import CounterHolder from './components/CounterHolder'
import { useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <h2>CreateContext + useContext + useRef + useReducer Hooks</h2> */}
    <CounterHolder header="counter game" count={count} setCount={setCount}/>
    </>
  )
}

export default App
