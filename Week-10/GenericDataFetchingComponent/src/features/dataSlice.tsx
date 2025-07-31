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