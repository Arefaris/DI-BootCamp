import { ADD } from "./constants"

export const add = (name: string, date: string)=>{
    return {
        type: ADD,
        payload: {name, date}
    }
}