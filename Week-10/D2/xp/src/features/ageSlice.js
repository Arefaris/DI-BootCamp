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