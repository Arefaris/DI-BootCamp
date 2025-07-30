import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../components/postsSlice"
import usersReducer from "../components/sliceUsers"


export const store = configureStore({
    reducer: {
        postSliceReducer,
        usersReducer
    }
})