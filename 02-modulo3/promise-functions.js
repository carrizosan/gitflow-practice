const contratarJugador = (contratado) => {
  return new Promise((resolve, reject) => {
    if (contratado) {
      resolve("El jugador fue contratado y se suma al plantel profesional.");
    } else {
      reject("Hubo conflictos en las negociaciones y el jugador no se podra sumar.");
    }
  });
};

const muestraMensaje = mensaje => console.log(`Mensaje: ${mensaje}`);

contratarJugador(false)
  .then(mensaje => muestraMensaje(mensaje))
  .catch(error => muestraMensaje(error));
