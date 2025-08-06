import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link, useNavigate } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { useAuth } from './auth/useAuth'
import axios from 'axios'
import ProtectedRoute from './components/ProtectedRoute'


const BASE_URL = import.meta.env.VITE_BASE_URL

function App() {
  
  const {isAuthenticated} = useAuth()
  const navigate = useNavigate()


  const handleLogout = async()=> {
    try {
      await axios.post(`${BASE_URL}/api/user/logout`, {}, {
        withCredentials: true
      })
      logout()
      navigate("/login")
    }catch (error){
      console.log(error)
    }
  }
  return (
    <>
     <div style={{display: "flex", gap: "10px"}}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
     </div>
     
     <Routes>
        <Route path='/' element={<h2>Welcome to our App</h2>} />
        {
          !isAuthenticated && (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              </>
          ) 
        
        }
       
        <Route path='/dashboard' element={<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
          } 
           />
     </Routes>
    </>
  )
}

export default App
