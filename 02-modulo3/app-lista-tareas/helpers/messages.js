// eslint-disable-next-line no-unused-vars
const colors = require("colors");
const { options } = require("../constants/menuOptions");
const readline = require("readline");

const pause = () => {
  return new Promise((resolve) => {
    const rlPause = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rlPause.question("\nPresione " + "ENTER".magenta + "para continuar ...", () => {
      rlPause.close();
      resolve();
    });
  });
};

const showMenu = () => {
  // Header
  console.log("<<<<<<<<<< :::::::::::::::::::::::::::::::: >>>>>>>>>>".green);
  console.log("                    Lista de tareas".bold);
  console.log("<<<<<<<<<< :::::::::::::::::::::::::::::::: >>>>>>>>>>\n".green);

  // Options
  console.log("Seleccione una opción".bold + "  (Use las flechas) \n".gray);
  options.forEach((option) => {
    console.log(option.number.green + ". ".green + option.description.magenta);
  });

  return new Promise((resolve, reject) => {
    const rlMenu = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rlMenu.question("\nSeleccione una opcion ... ", (answer) => {
      if (isNaN(answer)) reject("Opcion invalida");

      if (answer < 0 || answer > 6) reject("Opcion incorrecta");

      rlMenu.close();
      resolve(answer);
    });
  });
};

exports.showMenu = showMenu;
exports.pause = pause;
