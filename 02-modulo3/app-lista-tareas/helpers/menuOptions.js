const { Tasks } = require("../models/tasks");
const { printHeader } = require("../helpers/common");
const inquirer = require("../helpers/inquirer");
const { saveFile } = require("./saveFile");
const { DB } = require("../constants/inquirerQuestions");
const tasksList = new Tasks();

/**
 * Shows the main menu
 * Returns the number of the selected option
 */
const showMainMenu = async () => {
  let selectedOption = "";
  printHeader("                    Menu Principal");
  try {
    selectedOption = await inquirer.showMenu();
  } catch (error) {
    console.log(error);
  } finally {
    console.clear();
  }

  return selectedOption;
};

/**
 * Creates a new task from user input
 */
const create = async () => {
  printHeader("                   Creación de tarea");
  const input = await inquirer.readInput();
  tasksList.addTask(input.inputText);
  console.log("\nTarea creada con éxito\n".bold);
  saveFile(DB.PATH, DB.FILE, JSON.stringify(tasksList.arrList));

  await inquirer.pause();
};

/**
 * Shows all the tasks
 */
const showAll = async () => {
  printHeader("                   Listado de tareas");
  console.log(tasksList.toString());
  await inquirer.pause();
};

const showCompletedIncompletedTasks = async (completed) => {
  printHeader(`                   Tareas ${completed ? "completas" : "pendientes"}`);
  console.log(tasksList.completedInconpletedToString(completed));
  await inquirer.pause();
};

module.exports = {
  showAll,
  create,
  showMainMenu,
  showCompletedIncompletedTasks,
};
