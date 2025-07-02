export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = {
      id: this.tasks.length + 1,
      description,
      completed: false,
    };
    this.tasks.push(task);
  }

  markComplete(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
    } else {
      console.warn(`Task with ID ${id} not found.`);
    }
  }

  listTasks() {
    return this.tasks;
  }
}
