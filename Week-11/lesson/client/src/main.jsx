import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, BrowserRouter } from "react-router"
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './auth/useAuth.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
