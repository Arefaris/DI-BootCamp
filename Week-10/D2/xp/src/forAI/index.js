// store.js 
import { configureStore } from "@reduxjs/toolkit";
import ageReducer from "../features/ageSlice"

export const store = configureStore({
    reducer: {
        ageReducer,
    }
})

// ageSlice.js 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: "",
    age: 1,
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const increaseAgeAsync = createAsyncThunk("age/increase", async()=> {
  return await delay(3000)
})

export const decreaseAgeAsync = createAsyncThunk("age/decrease", async()=> {
  return await delay(3000)
})

const ageSlice = createSlice({
    name: "age", 
    initialState,
    reducers: {
        decreaseAge: (state) => {
            state.age--
        }
    },
    extraReducers(builder) {
        builder.addCase(increaseAgeAsync.pending, (state)=> {
            state.loading = "loading"
            console.log(state)
        })
        builder.addCase(increaseAgeAsync.rejected, (state)=> {
            state.loading = "error"
            console.log(state)
        })
        builder.addCase(increaseAgeAsync.fulfilled, (state, action) => {
            state.loading = ""
            state.age = state.age + 1
            console.log(action)
        })
        builder.addCase(decreaseAgeAsync.pending, (state)=> {
            state.loading = "loading"
        })
        builder.addCase(decreaseAgeAsync.rejected, (state)=> {
            state.loading = "error"
        })
        builder.addCase(decreaseAgeAsync.fulfilled, (state)=> {
            state.loading = "fullfiled"
            state.age = state.age - 1
        })

    }
})

export const {} = ageSlice.actions
export default ageSlice.reducer

// Age.jsx content
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increaseAgeAsync, decreaseAgeAsync} from "../features/ageSlice"
export default function Age() {
  const age = useSelector((state) => state.ageReducer.age)
  const loading = useSelector((state) => state.ageReducer.loading)
  const dispatch = useDispatch()
  
  return (<>
      
      <h2>Age: {age}</h2>
      <button onClick={() => dispatch(increaseAgeAsync())}>Increase</button>
      <button onClick={()=> dispatch(decreaseAgeAsync())}>Decrease</button>
      <div>
            {loading === "loading" ? <i className="fas fa-spinner fa-spin"></i> : ""}
      </div>
      
    </>
    
  )
}

// App.jsx 
import './App.css'
import Age from './features/Age'
function App() {


  return (
    <>
      <h1>Age Tracker</h1>
      <Age />

    </>
  )
}

export default App