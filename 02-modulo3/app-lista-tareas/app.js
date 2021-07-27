// eslint-disable-next-line no-unused-vars
const colors = require("colors");
// const messages = require("./helpers/messages");
const inquirer = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let selectedOption = "";

  do {
    try {
      selectedOption = await inquirer.showMenu();
    } catch (error) {
      console.log(error);
    } finally {
      await inquirer.pause();
      console.clear();
    }
  } while (selectedOption.mainMenu !== "0");
};

main();
