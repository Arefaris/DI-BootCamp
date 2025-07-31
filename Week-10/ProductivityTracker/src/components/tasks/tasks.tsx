import React, { useReducer, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Task } from '../../types'
import { addTask } from './state/tasksSlice'
import type { RootState } from '../../Redux/store'

export default function Tasks() {
  const tasks = useSelector((state: RootState) => state.taskSliceReducer.tasks)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  return (<>
    <button onClick={() => dispatch(addTask(inputRef.current?.value))}>ADD TASK</button>
    <input ref={inputRef}></input>
    {
        tasks.map((task) => {
            return <div key={task.id}>{task.task} ({task.completed ? "completed" : "not completed"})</div>
        })
    }
    </>
    
  )
}
