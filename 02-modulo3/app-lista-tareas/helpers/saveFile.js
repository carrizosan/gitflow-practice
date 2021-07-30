const fs = require("fs");

const saveFile = (path, fileName, result) => {
  if (!validateFileName(fileName)) throw Error("File name not valid");

  return new Promise((resolve, reject) =>
    // Grabo archivo txt
    fs.writeFile(path + fileName, result, (error) => {
      // En caso de error rechazo la promesa.
      if (error) reject(error);

      resolve("File Saved");
    })
  );
};

const readFile = (fullPath) => {
  if (fs.existsSync(fullPath)) {
    const response = fs.readFileSync(fullPath, { encoding: "utf-8" });
    return JSON.parse(response);
  } else {
    throw new Error("El path o archivo indicado no existe");
  }
};

// Valida un nombre de archivo con algunos formatos validos.
const validateFileName = (fileName) => {
  return /^\w+.(txt|png|pdf|jpg|json)$/.test(fileName);
};

module.exports = {
  saveFile,
  readFile,
};
