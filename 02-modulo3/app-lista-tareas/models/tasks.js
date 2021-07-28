class Tasks {
  constructor() {
    this.list = {};
  }

  get list() {
    return this.list;
  }

  set list(tasksList) {
    this._list = tasksList;
  }
}

exports.Tasks = Tasks;
