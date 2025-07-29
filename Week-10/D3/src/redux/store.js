import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "../components/postsSlice"

export const store = configureStore({
    reducer: {
        postSliceReducer,
    }
})