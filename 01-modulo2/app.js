const fileSystem = require("./writeFile");
const fileName = "tabla5.txt";
const InvalidfileName = "tabla5";
let result = "";

// Guardo la tabla del 5, del 1 al 10.
for (let i = 1; i <= 10; i++) {
  result += `5 x ${i} = ${5 * i} \n`;
}

try {
  // Ejecuto promesa para guardar archivo y caputuro posibles errores
  fileSystem
    .writeFile(fileName, result)
    .then((successMessage) => console.log(`Completed. ${successMessage}`))
    .catch((reason) => console.log(reason));
} catch (err) {
  console.log(err);
}

try {
  // Testeo la promesa con un nombre de archivo incorrecto
  fileSystem
    .writeFile(InvalidfileName, result)
    .then((successMessage) => console.log(`Completed. ${successMessage}`))
    .catch((reason) => console.log(reason));
} catch (err) {
  console.log(err);
}
