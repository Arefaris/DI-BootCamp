import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../components/tasks/state/tasksSlice"

export const store = configureStore({
    reducer: {
        taskSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>