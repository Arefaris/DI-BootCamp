import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const addNumbers = () => {
    
    setResult(number1 + number2)
    setNumber1(0)
    setNumber2(0)
  }
  return (
    <div className='App'>
     <h1>Adding two numbers</h1>
     <input type='number' onChange={(e) => setNumber1(Number(e.target.value))}></input>
     <input type='number' onChange={(e) => setNumber2(Number(e.target.value))}></input>
     <button onClick={addNumbers}>ADD</button>
      <h2>Result: {result}</h2>
    </div>
  )
}

export default App
