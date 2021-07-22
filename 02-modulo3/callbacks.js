// SIN CALLBACKS

let saboresDeHelado = [
  "Menta",
  "Dulce de Leche",
  "Granizado",
  "Tramontana",
  "Crema Americana",
  "Chocolate Blanco",
];

const mostrarSaboresDeHelado = () => {
  console.log("\nSabores de Helado:\n");
  saboresDeHelado.forEach((sabor) => console.log(sabor));
};

mostrarSaboresDeHelado();

// CON CALLBACKS

const agregarSaborDeHelado = (sabor, callback) => {
  saboresDeHelado.push(sabor);
  callback();
};

// Agregando los 5 elementos con callback

saboresDeHelado = [];

agregarSaborDeHelado("Limon al Agua", mostrarSaboresDeHelado);
agregarSaborDeHelado("Chocolate Amargo", mostrarSaboresDeHelado);
agregarSaborDeHelado("Sambayon", mostrarSaboresDeHelado);
agregarSaborDeHelado("Pistacho", mostrarSaboresDeHelado);
agregarSaborDeHelado("Almendrado", mostrarSaboresDeHelado);

// PRUEBA CALLBACK HELL

const iniciarCallBackHell = () => {
  setTimeout(() => {
    agregarSaborDeHelado("Frutilla a la crema", mostrarSaboresDeHelado);

    setTimeout(() => {
      agregarSaborDeHelado("Marroc", mostrarSaboresDeHelado);

      setTimeout(() => {
        agregarSaborDeHelado("Banana Split", mostrarSaboresDeHelado);
      }, 3000);
    }, 3000);
  }, 3000);
};

iniciarCallBackHell();
