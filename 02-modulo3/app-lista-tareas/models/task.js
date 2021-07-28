const { v4: uuidv4 } = require("uuid");

class Task {
  constructor(description) {
    this._id = uuidv4(); // Generate an unique long id
    this._description = description;
    this._completedDate = null;
  }

  // Getters
  get id() {
    return this._id;
  }

  get description() {
    return this._description;
  }

  get completedDate() {
    return this._completedDate;
  }

  // Setters
  set id(taskId) {
    this._id = taskId;
  }

  set description(taskDescription) {
    this._description = taskDescription;
  }

  set completedDate(taskcompletedDate) {
    this._completedDate = taskcompletedDate;
  }

  // Methods
  toString() {
    return `# ID: ${this._id}\n# Descripción: ${this._description.toString()}\n# Completado en: ${
      this._completedDate ? this._completedDate : "No completado"
    }`;
  }
}

exports.Task = Task;
