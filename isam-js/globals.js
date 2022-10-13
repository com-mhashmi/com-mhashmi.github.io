/// Global variables
let consoleTextElement;
let oldTextElement;
let commandHistory = [];
let currentCommandInHistory = 0;

function setupGlobalVariables() {
  console.debug("Setting up global variables");
  // Get text element containing history
  oldTextElement = $(oldText);
  // Get console typing text element
  consoleTextElement = $(consoleText);
}
