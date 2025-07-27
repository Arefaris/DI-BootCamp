//redux/action.js
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

//redux/reducer.js
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default todoReducer;

//redux/store.js
import { createStore } from 'redux';
import todoReducer from './reducer';

const store = createStore(todoReducer);

export default store;

//components/AddTodo.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
};

export default AddTodo;

//components/TodoItem.jsx
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span 
        onClick={() => dispatch(toggleTodo(todo.id))}
        className="todo-text"
      >
        {todo.text}
      </span>
      <button 
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

//components/TodoList.jsx
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

//App.jsx
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App

//main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
