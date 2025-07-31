import { act, useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import { useReducer, createContext, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useImmerReducer } from 'use-immer'

export const TaskContext = createContext();

const initalState = {
  task: [
 
  ]
}

const ACTION_ADD_TASK = "add_task"
export const ACTION_REMOVE_TASK = "remove_task"



const taskReduser = (state, action) => {
  if (action.type === ACTION_ADD_TASK) {
    // const newTask = [...state.task]
    // newTask.push({id: uuidv4(), name: action.payload, action: true})
    // return {...state, task: newTask}
    state.task.push({id: uuidv4(), name: action.payload, action: true})
    
  } else if (action.type === ACTION_REMOVE_TASK) {
    const filterTask = state.task.filter(item => item.id === action.id);
    return {...state, task: filterTask}
  }
  return state;
}
function App() {
  const inputRef = useRef()
  const [state, dispatch] = useImmerReducer(taskReduser, initalState);

  const addTask = ()=> {
  const value = inputRef.current.value
  dispatch({type: ACTION_ADD_TASK, payload: value})
  inputRef.current.value = ""
}
  return (
    <>
     <h2>Task Manager</h2>
     <div>
      <input ref={inputRef} type="text" />
      <button onClick={()=> addTask()}>ADD TASK</button>
     </div>
     <TaskContext.Provider value={{state, dispatch}}>
        <TaskList />
     </TaskContext.Provider>

    </>
  )
}

export default App
