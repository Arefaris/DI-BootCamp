import { useState, useReducer, act } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [inputState, setInput] = useState(0)

  const initialState = {
    count: 0, task:[], active:true
  }

    /**
   * useReducer is a React Hook for managing more complex state logic.
   * It works like a mini Redux: you have a state object and a reducer function.
   * The reducer receives the current state and an action, and returns the new state.
   * You use dispatch(action) to trigger state changes, instead of setState.
   * This is useful when state updates depend on the previous state or have multiple ways to update.
   */

    
  /**
   * state - initalState
   * action - {}
   */
  const ACTION_INCREMENT = "increment"
  const ACTION_DECREMENT = "decrement"
  
  const counterReducerr = (state, action) => {
    console.log(action)

    if (action?.type === ACTION_INCREMENT){
      //...call api
      //...cal ai agent
      return {...state, count: state.count + 1}
    }else if (action?.type === ACTION_DECREMENT){
      return {...state, count: state.count - 1}
    }
    else if (action?.type === "123"){
      return {...state, count: state.count - 1}
    }
    else if(action?.type === "add_input") {
      return {...state, count: state.count + Number(inputState)}
    }
    return state; // {count: 0}
  }

  const [state, dispatch] = useReducer(counterReducerr, initialState)

  return (
    <>
        <h2>useReducer Hook</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <h2>reducer count : {state.count}</h2>
          <button onClick={()=> dispatch({type: "increment"})}>Dispatch + 1</button>
          <button onClick={()=> dispatch({type: "Decrement"})}>Dispatch - 1</button>
          <div>
            <input onChange={(e)=> {setInput(e.target.value)}} type="text" />
            <button onClick={()=> dispatch({type: "add_input"})}>Dispatwch with input number</button>
          </div>
        </div>
    </>
  )
}

export default App
