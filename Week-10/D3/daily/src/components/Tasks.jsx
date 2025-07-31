import React from 'react'
import { useSelector } from 'react-redux'

export default function Tasks() {
    const tasks = useSelector(state => state.tasksSliceReducer.tasks)
    
    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <div>{task.task}</div>
                </div>
            ))}
        </div>
    )
}
