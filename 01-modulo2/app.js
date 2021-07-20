const fileSystem = require("./utilities/writeFile");
const table = require("./utilities/table");
const colors = require("colors");
const argv = require("./config/yargs");
let result = "";
const { base, top, list } = argv.argv;

result = table.createTableByBase(result, base, top);

if (list) {
  console.log(
    "|||||||||| ".red +
      `TABLA DEL ${base} HASTA EL NUMERO ${top}`.rainbow +
      " ||||||||||".red
  );
  console.log("\n" + result.america.bold);
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
