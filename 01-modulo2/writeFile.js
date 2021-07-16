const fs = require("fs");

const writeFile = (fileName, result) => {
  if (!validateFileName(fileName)) throw Error("File name not valid");

  return new Promise((resolve, reject) =>
    // Grabo archivo txt
    fs.writeFile(fileName, result, (error) => {
      // En caso de error rechazo la promesa.
      if (error) reject(error);

      resolve("File Saved");
    })
  );
};

// Valida un nombre de archivo con algunos formatos validos.
const validateFileName = (fileName) => {
  return /^\w+.(txt|png|pdf|jpg)$/.test(fileName);
};

exports.writeFile = writeFile;
