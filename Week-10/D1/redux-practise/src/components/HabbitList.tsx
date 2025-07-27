import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Habbit from './Habbit'
import type { RootState } from '../redux/store'

interface Habit {
  id: string;
  name: string;
  date: number;
  completed: boolean;
}


export default function HabbitList() {
  const habits = useSelector((state: RootState) => state.habbitReducer.habits)
  
  return (
    <div>
      {
        habits.map(habit => <Habbit key={habit.id} name={habit.name} date={habit.date}/>)
      }
    </div>
  )
}
