const { DB } = require("../constants/inquirerQuestions");
const { readFile } = require("../helpers/saveFile");
const { Task } = require("./task");

class Tasks {
  constructor() {
    this._list = {};
    this.getTasksFromArray();
  }

  // Getters
  get list() {
    return this._list;
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

  getTasksFromArray() {
    const arrTasks = readFile(DB.FULLPATH);
    arrTasks.forEach((task) => {
      this._list[task._id] = task;
    });
  }

  deleteTask(id) {
    delete this._list[id];
  }

  toggleCompleteds(idArr) {
    const arrTasks = readFile(DB.FULLPATH);

    arrTasks.forEach((task) => {
      const isCompleted = task._completedDate ? true : false; // The task is already completed
      const isInArray = idArr.find((id) => id === task._id); // The task is in the completeds array (parameter)

      if (isCompleted && !isInArray) {
        task._completedDate = null;
        this._list[task._id]._completedDate = null;
      } else if (!isCompleted && isInArray) {
        task._completedDate = new Date().toISOString();
        this._list[task._id]._completedDate = new Date().toISOString();
      }
    });

    return arrTasks;
  }

  toString() {
    let listOfTasks = "";
    Object.keys(this._list).forEach((task, index) => {
      listOfTasks +=
        (index + 1).toString().magenta +
        ". " +
        this._list[task]._description.bold +
        " - " +
        (this._list[task]._completedDate ? "Completado".green : "Incompleto".red) +
        "\n";
    });

    return listOfTasks;
  }

  completedInconpletedToString(completed) {
    let listOfTasks = "";
    Object.keys(this._list).forEach((task, index) => {
      if (completed) {
        if (this._list[task]._completedDate) {
          listOfTasks +=
            (index + 1).toString().magenta +
            ". " +
            this._list[task]._description.bold +
            " - " +
            (this._list[task]._completedDate ? "Completado".green : "Incompleto".red) +
            "\n";
        }
      } else {
        if (!this._list[task]._completedDate) {
          listOfTasks +=
            (index + 1).toString().magenta +
            ". " +
            this._list[task]._description.bold +
            " - " +
            (this._list[task]._completedDate ? "Completado".green : "Incompleto".red) +
            "\n";
        }
      }
    });

    return listOfTasks;
  }
}

exports.Tasks = Tasks;
