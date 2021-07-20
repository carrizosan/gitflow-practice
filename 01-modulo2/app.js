const fileSystem = require("./utilities/writeFile");
const table = require("./utilities/table");
const colors = require("colors");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  // Base de la multiplicacion
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  // Indica hasta que numero va a multiplicar
  .option("t", {
    alias: "top",
    type: "number",
    demandOption: true,
    default: 10,
  })
  // Indica si imprime el resultado por consola
  .option("l", {
    alias: "list",
    type: "boolean",
    boolean: true,
    demandOption: true,
    default: false,
  })
  // Validaciones de tipo y rango para base y top
  .check((argv) => {
    if (isNaN(argv.base)) {
      throw new Error("Base parameter must be a number.");
    } else if (argv.base < 1 || argv.base > 20) {
      throw new Error("Base parameter must be between 1 and 20");
    }

    if (isNaN(argv.top)) {
      throw new Error("Top parameter must be a number.");
    } else if (argv.top < 1) {
      throw new Error("Top parameter must be grather than 1");
    }
    return true;
  }).argv;

let result = "";
const base = argv.b;
const top = argv.top;
const list = argv.list;

result = table.createTableByBase(result, base, top);

if (list) {
  console.log(`TABLA DEL ${base} HASTA EL NUMERO ${top} !!`.rainbow);
  console.log(result);
}

const fileName = `tabla${base}.txt`;

try {
  // Ejecuto promesa para guardar archivo y caputuro posibles errores
  fileSystem
    .writeFile(fileName, result)
    .then((successMessage) => console.log(`Completed. ${successMessage}`))
    .catch((reason) => console.log(reason));
} catch (err) {
  console.log(err);
}
