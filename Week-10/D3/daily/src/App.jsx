import { useState } from 'react'
import Tasks from './components/Tasks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>Productivity Tracker</div>
     <Tasks />
    </>
  )
}

export default App
