const { Task } = require("./task");

class Tasks {
  constructor() {
    this.list = {};
  }

  // Getters
  get list() {
    return this.list;
  }

  // Setters
  set list(tasksList) {
    this._list = tasksList;
  }

  // Methods
  addTask(description) {
    const newTask = new Task(description);
    this._list[newTask.id] = newTask;
  }
}

exports.Tasks = Tasks;
