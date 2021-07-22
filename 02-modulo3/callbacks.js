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
  setTimeout(() => {
    console.log("\nSabores de Helado:\n");
    saboresDeHelado.forEach((sabor) => console.log(sabor));
  }, 1000);
};

mostrarSaboresDeHelado();

// CON CALLBACKS

const agregarSaborDeHelado = (sabor, callback) => {
  setTimeout(() => {
    saboresDeHelado.push(sabor);
    callback();
  }, 2000);
};

agregarSaborDeHelado("Limon al Agua", mostrarSaboresDeHelado);

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
