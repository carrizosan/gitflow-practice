// eslint-disable-next-line no-unused-vars
const colors = require("colors");
const { options } = require("../constants/menuOptions");
const readline = require("readline");

const rlMenu = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rlPause = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const opt = {
  selected: null,
};

const pause = () => {
  rlPause.question("\nPresione " + "ENTER".magenta + "para continuar ...", () => {
    rlPause.close();
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

  rlMenu.question("\nSeleccione una opcion ... ", (answer) => {
    opt.selected = answer;
    console.log(opt);

    rlMenu.close();
  });
};

exports.showMenu = showMenu;
exports.pause = pause;
