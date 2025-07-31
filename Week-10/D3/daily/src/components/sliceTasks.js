import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{
        id: 0,
        task: "meow"
    }]    
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})

export default tasksSlice.reducer