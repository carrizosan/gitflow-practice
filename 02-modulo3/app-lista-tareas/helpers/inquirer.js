const inquirer = require("inquirer");
const { questions } = require("../constants/inquirerQuestions");

/**
 * Pauses the program. Continue with ENTER
 */
const pause = async () => {
  return await inquirer.prompt(questions.pause);
};

/**
 * Shows the main menu and waits for user selection
 */
const showMenu = async () => {
  return await inquirer.prompt(questions.mainMenu);
};

/**
 * Reads and return only one line
 */
const readInput = async () => {
  return await inquirer.prompt(questions.readInputText);
};

/**
 * Shows all the tasks and select one to delete
 */
const tasksListToDelete = async (taskList) => {
  questions.deleteTask.choices = [];

  taskList.forEach((task, index) => {
    questions.deleteTask.choices.push({
      value: task._id,
      name: `${(index + 1).toString().magenta}. ${task._description}`,
    });
  });
  questions.deleteTask.choices.unshift({ value: "0", name: "0".green + ". Cancelar" });

  return await inquirer.prompt(questions.deleteTask);
};

/**
 * Shows confirmation question, with the message as parameter.
 */
const confirm = async (message) => {
  questions.confirmation.message = message;
  return await inquirer.prompt(questions.confirmation);
};

/**
 * Shows all the tasks and select multiple options to complete or revert (change to pending)
 */
const taskListToComplete = async (taskList) => {
  questions.completeTasks.choices = [];

  taskList.forEach((task, index) => {
    questions.completeTasks.choices.push({
      value: task._id,
      name: `${(index + 1).toString().magenta}. ${task._description}`,
      checked: task._completedDate, // Pending tasks are null/falsy expressions
    });
  });

  return await inquirer.prompt(questions.completeTasks);
};

module.exports = {
  pause,
  showMenu,
  readInput,
  tasksListToDelete,
  confirm,
  taskListToComplete,
};
