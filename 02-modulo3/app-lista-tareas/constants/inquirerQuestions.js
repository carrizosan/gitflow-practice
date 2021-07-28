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
  },
  pause: {
    type: "input",
    name: "pause",
    message: ("Presione " + "ENTER ".magenta + "para continuar").bold,
  },
  readInputText: {
    type: "input",
    name: "inputText",
    message: "Ingrese la descripción: ".bold,
    validate(value) {
      return value.length === 0 ? "Debe ingresar un valor" : true;
    },
  },
};

exports.questions = questions;
