// App.tsx
import DataFetcher from './components/DataFetcher'
import './App.css'

function App() {
  
  return (
    <>
      <DataFetcher />
    </>
  )
}

export default App

// components/DataFetcher.tsx
import React, { useEffect } from 'react'
import type { RootState } from '../redux/store/store'
import { useDispatch, useSelector } from 'react-redux'
import type{ AppDispatch } from '../redux/store/store';
import { getData } from '../features/dataSlice'

export default function DataFetcher() {
  const meals = useSelector((state: RootState) => state.recepieSliceReducer.meals)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    dispatch(getData())
  }, [])
  return ( <>
            {meals.map((meal) => {
                return <div key={meal.idMeal}>
                    <div>Title: {meal.strMeal}</div>
                    <div>Category: {meal.strCategory}</div>
                    <div>Instructions: {meal.strInstructions}</div>
                </div>
            })}
        </>
    
  )
}

// features/dataSlice.tsx
import { createSlice } from "@reduxjs/toolkit";
import fetchRecepies from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/fetch", async ()=> {
    const data = await fetchRecepies()
    return data
})

const initialState = {
    meals: [{
        idMeal: 0,
        strMeal: "",
        strCategory: "",
        strInstructions: ""
    }]}


const recepieSlice = createSlice({
    name: "recepie",
    initialState,
    reducers: {
        getData: ()=> {
            fetchRecepies()
        }
    },
    extraReducers(b){
        b.addCase(getData.fulfilled, (state, action)=> {
            console.log(action.payload)
            state.meals = action.payload.meals
            
        })
        b.addCase(getData.pending, (state, action) => {
            console.log("Loading...")
        })
        b.addCase(getData.rejected, (state, action)=> {
            console.error("Something went wrong with an api")
        })
    }
})

export default recepieSlice.reducer

// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store/store.ts'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>

)

// api/api.ts
const fetchRecepies = async ()=> {
try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const data = await response.json()

    console.log(data)
	return data
} catch (error) {
	console.error(error);
}

}
export default fetchRecepies

// redux/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import recepieSliceReducer from "../../features/dataSlice"

const store = configureStore({
    reducer: {
        recepieSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

// types.ts
export type Meal = {
    [key: string]: any;
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strInstructions: string
}