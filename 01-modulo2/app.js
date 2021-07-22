const fileSystem = require("./utilities/writeFile");
const table = require("./utilities/table");
const argv = require("./config/yargs");
let resultWithoutLayout = "";
let resultWithLayout = "";
const { base, top, list } = argv.argv;

resultWithoutLayout = table.createTableByBaseWithoutLayout(
  resultWithoutLayout,
  base,
  top
);
resultWithLayout = table.createTableByBase(resultWithLayout, base, top);

if (list) {
  console.log(resultWithLayout);
}

const fileName = `tabla${base}.txt`;

try {
  // Ejecuto promesa para guardar archivo y caputuro posibles errores
  fileSystem
    .writeFile(fileName, resultWithoutLayout)
    .then((successMessage) => console.log(`Completed. ${successMessage}`))
    .catch((reason) => console.log(reason));
} catch (err) {
  console.log(err);
}
