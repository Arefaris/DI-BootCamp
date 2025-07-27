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