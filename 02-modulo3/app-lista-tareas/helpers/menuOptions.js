const { Tasks } = require("../models/tasks");
const { printHeader } = require("../helpers/common");
const { saveFile } = require("./saveFile");
const { DB } = require("../constants/inquirerQuestions");
const inquirer = require("../helpers/inquirer");
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

/**
 * Shows completed or incompleted tasks
 * Completed parameter: Boolean
 */
const showCompletedIncompletedTasks = async (completed) => {
  printHeader(`                   Tareas ${completed ? "completas" : "pendientes"}`);
  console.log(tasksList.completedInconpletedToString(completed));
  await inquirer.pause();
};

/**
 * Delete a task.
 * Shows all the available tasks, allows user to chose one.
 * Shows a confirmation question.
 */
const deleteTask = async () => {
  let confirm = {};
  do {
    console.clear();
    printHeader("                     Eliminar tarea");
    const result = await inquirer.tasksListToDelete(tasksList.arrList); // Ask user to choose a task

    if (result.deleteTask === "0") return;

    confirm = await inquirer.confirm("Esta seguro que desea eliminar la tarea?");

    if (confirm.ok) {
      tasksList.deleteTask(result.deleteTask); // Delete task from model
      console.log("\nTarea eliminada con éxito\n".bold);
      saveFile(DB.PATH, DB.FILE, JSON.stringify(tasksList.arrList)); // Delete task from database/file
    }
  } while (!confirm.ok);

  await inquirer.pause();
};

/**
 * Shows confirm question before exit system.
 */
const exit = async () => {
  return await inquirer.confirm("Esta seguro que desea salir?");
};

module.exports = {
  showAll,
  create,
  showMainMenu,
  showCompletedIncompletedTasks,
  deleteTask,
  exit,
};
