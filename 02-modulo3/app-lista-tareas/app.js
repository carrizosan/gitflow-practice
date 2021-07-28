require("colors");
const { create, showAll, showMainMenu } = require("./helpers/menuOptions");

/**
 * Main thread
 * Calls the main menu until user exits
 * Calls options methods depending on the selected one
 */
const main = async () => {
  let selectedOption = "";
  console.clear();

  do {
    console.clear();
    selectedOption = await showMainMenu();
    switch (selectedOption.mainMenu) {
      case "1":
        await create();
        break;
      case "2":
        await showAll();
        break;
    }
  } while (selectedOption.mainMenu !== "0");
};

main();
