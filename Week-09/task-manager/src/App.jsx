import "./App.css";
import TaskList from "./components/TaskList";
import { useReducer, createContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useImmerReducer } from "use-immer";

export const TaskContext = createContext();

const initialState = {
  // { id: "jflhfk", name: "task 1", active: true }
  task: [],
};

const ACTION_ADD_TASK = "add_task";
export const ACTION_REMOVE_TASK = "remove_task";

const tasksReducer = (state, action) => {
  if (action.type === ACTION_ADD_TASK) {
    // const newTask = [...state.task];
    // newTask.push({ id: uuidv4(), name: action.payload, action: true });
    // return {
    //   ...state,
    //   task: [
    //     ...state.task,
    //     { id: uuidv4(), name: action.payload, action: true },
    //   ],
    // };
    state.task.push({ id: uuidv4(), name: action.payload, action: true });
  } else if (action.type === ACTION_REMOVE_TASK) {
    // const filterTask = state.task.filter((item) => item.id !== action.id);
    // return { ...state, task: filterTask };
    state.task = state.task.filter((item) => item.id !== action.id);
  }
  return state;
};

function App() {
  const [state, dispatch] = useImmerReducer(tasksReducer, initialState);
  const inputRef = useRef();

  const addTask = () => {
    const value = inputRef.current.value;
    dispatch({ type: ACTION_ADD_TASK, payload: value });
    inputRef.current.value = "";
  };

  return (
    <>
      <h2>Task Manager</h2>
      <div>
        <input ref={inputRef} placeholder='Add New Task...' />
        <button onClick={() => addTask()}>Add Task</button>
      </div>
      <TaskContext value={{ state, dispatch }}>
        <TaskList />
      </TaskContext>
    </>
  );
}

export default App;
