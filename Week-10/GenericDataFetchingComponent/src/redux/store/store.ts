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