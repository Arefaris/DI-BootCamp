import {
    ACTION_ADD_TASK,
    ACTION_REMOVE_TASK,
    ACTION_EDIT_TASK
} from "./constants";
import { nanoid } from "@reduxjs/toolkit";


const initialState = {
    tasks: [],
    status: "",
 }

 export const tasksReducer = (state = initialState, action={}) => {

    switch (action.type) {
        case ACTION_ADD_TASK:
            const newTask = [...state.tasks];
            newTask.push({
                id: nanoid(),
                name: action.payload.name, 
                date: action.payload.date,
                active: true
            })
            return {...state, tasks: newTask}

        case ACTION_EDIT_TASK:
            const activeTasks = [...state.tasks]
            const index = activeTasks.findIndex(item => item.id == action.payload)
            activeTasks[index] = {...activeTasks[index], active: !activeTasks[index].active}
            return {...state, tasks: activeTasks}
        default:
            return state;
 }

}