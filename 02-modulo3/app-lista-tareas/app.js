// eslint-disable-next-line no-unused-vars
const colors = require("colors");
const messages = require("./helpers/messages");

console.clear();

const main = async () => {
  let selectedOption = "";

  do {
    try {
      selectedOption = await messages.showMenu();
      console.log(`Opción seleccionada: ${selectedOption}`);
    } catch (error) {
      console.log(error);
    } finally {
      await messages.pause();
      console.clear();
    }
  } while (selectedOption !== "0");
};

main();
