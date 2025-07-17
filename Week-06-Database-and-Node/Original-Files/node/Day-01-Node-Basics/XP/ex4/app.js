import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask("Buy groceries");
myTodos.addTask("Walk the dog");
myTodos.addTask("Finish homework");

myTodos.markComplete(2); // Mark "Walk the dog" as complete

console.log("All Tasks:");
myTodos.listTasks().forEach(task => {
  console.log(`[${task.completed ? '✔' : ' '}] ${task.id}: ${task.description}`);
});
