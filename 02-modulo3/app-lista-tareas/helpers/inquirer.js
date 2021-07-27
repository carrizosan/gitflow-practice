// eslint-disable-next-line no-unused-vars
const colors = require("colors");
const inquirer = require("inquirer");
const { questions } = require("../constants/inquireQuestions");
let answers = [];

const pause = async () => {
  return await inquirer.prompt(questions.pause);
};

const showMenu = async () => {
  // Header
  console.log("<<<<<<<<<< :::::::::::::::::::::::::::::::: >>>>>>>>>>".green);
  console.log("                    Lista de tareas".bold);
  console.log("<<<<<<<<<< :::::::::::::::::::::::::::::::: >>>>>>>>>>\n".green);

  answers = await inquirer.prompt(questions.mainMenu);

  return answers;
};

exports.pause = pause;
exports.showMenu = showMenu;
