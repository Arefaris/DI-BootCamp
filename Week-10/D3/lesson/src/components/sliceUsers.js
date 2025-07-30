import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERSURL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
    users: [],
    writer: -1
}

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get(USERSURL)
    return response.data;
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        selectWriter: (state, action) => {
            state.writer = action.payload
        }
    },
    extraReducers(b) {
        b.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.users = action.payload
        })
    }
})

export const stateUsers = (state) => state.usersReducer

export const { selectWriter } = usersSlice.actions;

export default usersSlice.reducer