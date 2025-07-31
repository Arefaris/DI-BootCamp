const initialState =  {
    count: 0
}

import {ACTION_INCREMENT, ACTION_DECREMENT } from "./actions"

export const countReducer = (state = initialState, action)=> {
    if(action.type === ACTION_INCREMENT) {
        return {...state, count: state.count + 1}
    }else if (action.type === ACTION_DECREMENT){
        return {...state, count: state.count - 1}
    }
    return state
}