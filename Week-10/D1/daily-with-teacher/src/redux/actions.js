import { ACTION_ADD_TASK } from "./constants";
import { ACTION_REMOVE_TASK } from "./constants";
import { ACTION_EDIT_TASK } from "./constants"; 
import { ACTION_TASK_STATUS} from "./constants"
export const addTask = (name, date) => {
    return {
        type: ACTION_ADD_TASK,
        payload: {name, date}
    }
}

export const removeTask = (id) => {
    return {
        type: ACTION_REMOVE_TASK,
        payload: id,
    }
}

export const changeStatus = (id) => {
    return {
        type: ACTION_TASK_STATUS,
        payload: id
    }
}