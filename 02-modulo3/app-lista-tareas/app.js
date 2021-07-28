// eslint-disable-next-line no-unused-vars
const colors = require("colors");
// const inquirer = require("./helpers/inquirer");
const { Task } = require("./models/task");
const { Tasks } = require("./models/tasks");

console.clear();

const main = async () => {
  // let selectedOption = "";
  let task = new Task("Primer tarea");
  let tasks = new Tasks();

  // Object.keys(tasks).push(task._id);
  tasks._list[task.id] = task;

  console.log(task);
  console.log(tasks);

  // do {
  //   try {
  //     selectedOption = await inquirer.showMenu();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     await inquirer.pause();
  //     console.clear();
  //   }
  // } while (selectedOption.mainMenu !== "0");
};

main();
