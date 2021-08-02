require("colors");
const { create, showAll, showMainMenu, showCompletedIncompletedTasks } = require("./helpers/menuOptions");

/**
 * Main thread
 * Calls the main menu until user exits
 * Calls options methods depending on the selected one
 */
const main = async () => {
  let selectedOption = "";

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
      case "3":
        await showCompletedIncompletedTasks(true);
        break;
      case "4":
        await showCompletedIncompletedTasks(false);
        break;
    }
  } while (selectedOption.mainMenu !== "0");
};

main();
