import React from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

export default function Task() {
  return (
    <>
      <h2>Tasks planner</h2>
      <TaskInput />
      <TaskList />
    </>
  )
}
