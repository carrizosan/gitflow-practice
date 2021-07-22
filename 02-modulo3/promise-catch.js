const contratarJugador = (contratado) => {
  return new Promise((resolve, reject) => {
    if (contratado) {
      resolve("El jugador fue contratado y se suma al plantel profesional.");
    } else {
      reject("Hubo conflictos en las negociaciones y el jugador no se podra sumar.");
    }
  });
};

contratarJugador(false)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
