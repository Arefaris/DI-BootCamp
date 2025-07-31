import { configureStore } from "@reduxjs/toolkit";
import tasksSliceReducer from "../components/sliceTasks"

export  const store = configureStore({
    reducer: {
        tasksSliceReducer
    }
})