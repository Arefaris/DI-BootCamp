import { ADD } from "./constants"
import { v4 as uuidv4 } from 'uuid';

interface HabitState {
  habits: Habit[]
}

interface Habit {
  id: string;
  name: string;
  date: number;
  completed: boolean;
}


interface Action {
  type: string;
  payload?: any;
}

const initialState: HabitState = {
  habits: []
}


export const habbitReducer = (state: HabitState = initialState, action: Action): HabitState => {
  switch (action.type) {
    case ADD:
      const newHabbit = [...state.habits, {
        id: uuidv4(),
        name: action.payload.name, date: Date.now(),
        completed: false
      }]
      return { ...state, habits: newHabbit }

    default:
      return state
  }
}