import { configureStore } from "@reduxjs/toolkit";
import { habbitReducer } from "./reducers";

interface HabitState {
  habits: Habit[]
}

interface Habit {
  id: string;
  name: string;
  date: number;
  completed: boolean;
}

export interface RootState {
    habbitReducer: HabitState;
  }
const store = configureStore({
    reducer: {habbitReducer,
        
    }
})

export default store