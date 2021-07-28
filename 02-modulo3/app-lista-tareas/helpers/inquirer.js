// eslint-disable-next-line no-unused-vars
const colors = require("colors");
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

module.exports = {
  pause,
  showMenu,
  readInput,
};
