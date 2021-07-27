// eslint-disable-next-line no-unused-vars
const colors = require("colors");

const questions = {
  mainMenu: {
    type: "list",
    name: "mainMenu",
    message: "Seleccione una opción".bold.magenta,
    default: "1",
    choices: [
      {
        value: "1",
        name: "1. ".magenta + "Crear tarea",
      },
      {
        value: "2",
        name: "2. ".magenta + "Listar tareas",
      },
      {
        value: "3",
        name: "3. ".magenta + "Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. ".magenta + "Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. ".magenta + "Completar tarea/s",
      },
      {
        value: "6",
        name: "6. ".magenta + "Borrar tarea",
      },
      {
        value: "0",
        name: "0. ".magenta + "Salir",
      },
    ],
    //validate: (answer) => (answer < 0 || answer > 6 ? false : true),
  },
  pause: {
    type: "input",
    name: "pause",
    message: ("Presione " + "ENTER ".magenta + "para continuar").bold,
  },
};

// const questions = {
//   menu: {
//     type: "list",
//     name: "option",
//     message: "Elija una opcion:",
//     choices: [
//       { value: "1", name: "Crear tarea" },
//       { value: "2", name: "Listar tarea" },
//       { value: "3", name: "Listar tareas completadas" },
//       { value: "4", name: "Listar tareas pendientes" },
//       { value: "5", name: "Completar tarea(s)" },
//       { value: "6", name: "Borrar tarea" },
//       { value: "0", name: "Salir".bgRed },
//     ],
//   },
//   pause: {
//     type: "input",
//     name: "enter",
//     message: "Presione ENTER para continuar".bgCyan,
//   },
// };

exports.questions = questions;
