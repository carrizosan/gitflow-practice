const fs = require("fs");
const fileName = "tabla-5.txt";
let result = "";

// Guardo la tabla del 5, del 1 al 10.
for (let i = 1; i <= 10; i++) {
  result += `5 x ${i} = ${5 * i} \n`;
}

// Grabo archivo txt
fs.writeFile(fileName, result, (error) => {
  // En caso de error lanzo la excepcion
  if (error) throw error;

  console.log("File saved.");
});
