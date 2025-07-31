import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_APP_BASE_URL

function App() {
  const [msg, setMsg] = useState('')

  useEffect(()=>{
 
    getServerMessage()
  }, [])

  const getServerMessage = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/hello`)
        setMsg(response.data.message)
      } catch (error) {
        console.error('Error fetching message:', error)
      }
    }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    const input = e.target.something.value
 
      const res = await axios.post(`${BASE_URL}/api/hello`, {
        input: input
      })

 
  }
  return (
    <>
      <h1>{msg}</h1>
      <form onSubmit={handleSubmit}>
        <input type='text'></input>
        <input type='submit'></input>
      </form>
      <p>Check the console for server responses.</p>
    </>
  )
}

export default App
