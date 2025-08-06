import { useAppSelector, useAppDispatch } from './app/hooks'
import { selectAuth, loginSuccess, logout } from './features/auth/authSlice'
import Auth from './components/Auth'
import Stories from './components/Stories'
import './App.css'

export const App = () => {
  const dispatch = useAppDispatch()
  const { user, isAuthenticated } = useAppSelector(selectAuth)

  const handleLogin = (token: string, userData: any) => {
    dispatch(loginSuccess({ token, user: userData }))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Collaborative Stories</h1>
        {user && (
          <div className="user-info">
            Welcome, {user.username}!
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        )}
      </header>
      
      <main className="app-main">
        {!isAuthenticated ? (
          <Auth onLogin={handleLogin} />
        ) : (
          <Stories />
        )}
      </main>
    </div>
  )
}
