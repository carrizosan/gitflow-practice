// eslint-disable-next-line no-unused-vars
const colors = require("colors");
const { options } = require("../constants/menuOptions");

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
};

exports.showMenu = showMenu;
