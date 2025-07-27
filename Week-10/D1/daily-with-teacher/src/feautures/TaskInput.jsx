import React from 'react'
import { useDispatch } from 'react-redux'
import { ACTION_ADD_TASK } from '../redux/constants'
import { addTask } from '../redux/actions'
import { useRef } from 'react'
export default function TaskInput() {
  const nameRef = useRef()
  const dateRef = useRef()
  const dispatch = useDispatch()

  const addNewTask = () => {
    const name = nameRef.current.value
    const date = dateRef.current.value
    if (name.trim ()=== '') return
    dispatch(addTask(name, date))
  }
  return (
    <>
    <input ref={nameRef} placeholder='Task Name...'></input>
    <input ref={dateRef} type='date'></input>
    <button onClick={()=> addNewTask()} >Add Task</button>
    </>
  )
}
