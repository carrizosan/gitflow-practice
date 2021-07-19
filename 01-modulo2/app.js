const fileSystem = require("./utilities/writeFile");
const table = require("./utilities/table");
var colors = require("colors");
let result = "";

const base = process.argv[2].split("--base=")[1];
const limit = process.argv[3]?.split("--limit=")[1] || 10; // Segundo parametro Limit opcional.

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
