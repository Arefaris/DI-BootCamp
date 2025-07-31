import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../../Redux/store";
const initialState = {
    tasks: [
        {
            id: 0,
            task: "123",
            completed: false,
            category: "home"
        }
    ]
}
const taskSlice = createSlice({
    name: "task-slice",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: state.tasks.length + 1,
                task: action.payload,
                completed: false,
                category: action.payload
            })
        }
    },
})

export const stateTasks = (state: RootState) => state.taskSliceReducer
export const { addTask } = taskSlice.actions
export default taskSlice.reducer