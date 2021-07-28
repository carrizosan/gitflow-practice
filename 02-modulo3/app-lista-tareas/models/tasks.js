const { Task } = require("./task");

class Tasks {
  constructor() {
    this.list = {};
  }

  // Getters
  get list() {
    return this.list;
  }

  get arrList() {
    const array = [];
    Object.keys(this._list).forEach((key) => {
      array.push(this._list[key]);
    });
    return array;
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
