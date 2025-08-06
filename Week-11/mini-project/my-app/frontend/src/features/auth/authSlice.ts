import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
  token: string | null
  user: {
    id: number
    username: string
    email: string
  } | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  isAuthenticated: !!localStorage.getItem('token')
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.token = action.payload.token
      state.user = action.payload.user
      state.isAuthenticated = true
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
    },
    logout: (state) => {
      state.token = null
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },
  selectors: {
    selectAuth: (state) => state,
    selectToken: (state) => state.token,
    selectUser: (state) => state.user,
    selectIsAuthenticated: (state) => state.isAuthenticated
  }
})

export const { loginSuccess, logout } = authSlice.actions
export const { selectAuth, selectToken, selectUser, selectIsAuthenticated } = authSlice.selectors
export default authSlice