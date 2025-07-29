import { configureStore } from "@reduxjs/toolkit";
import bookSliceReducer from "../components/bookSlice"

export const store = configureStore(
    {
        reducer: {
            bookSliceReducer,
        }
    }
)