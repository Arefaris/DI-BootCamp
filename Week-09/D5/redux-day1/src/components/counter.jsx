import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_DECREMENT, ACTION_INCREMENT } from "../redux/actions";

const Counter = ()=>{
    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()
    return (<>
            <h2>Counter 0</h2>
            <button onClick={()=> dispatch({type: ACTION_INCREMENT})}> + </button>
            <button onClick={()=> dispatch({type: ACTION_DECREMENT})}> - </button>
    </>)
}