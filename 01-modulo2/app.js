const fileSystem = require("./utilities/writeFile");
const table = require("./utilities/table");
const colors = require("colors");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
let result = "";

const base = argv.base;
const limit = argv.limit || 10; // Segundo parametro Limit opcional.

result = table.createTableByBase(result, base, limit);

console.log(`TABLA DEL ${base} HASTA EL NUMERO ${limit} !!`.rainbow);
console.log(result);

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
