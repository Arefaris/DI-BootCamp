import { createSelector } from "@reduxjs/toolkit";
import { stateTasks } from "./tasksSlice";

export const selectTasksByCategory = createSelector([stateTasks], (state)=> {
    
})