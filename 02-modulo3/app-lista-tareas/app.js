require("colors");
const {
  create,
  showAll,
  showMainMenu,
  showCompletedIncompletedTasks,
  deleteTask,
  completeTasks,
  exit,
} = require("./helpers/menuOptions");

/**
 * Main thread
 * Calls the main menu until user exits
 * Calls options methods depending on the selected one
 */
const main = async () => {
  let selectedOption = "";
  let exitSystem = false;

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
      case "5":
        await completeTasks();
        break;
      case "6":
        await deleteTask();
        break;
      case "0":
        exitSystem = await exit();
        break;
    }
  } while (!exitSystem.ok);
};

main();
