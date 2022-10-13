async function printPeriod() {
  await waitMs(500).then(() => {
    oldTextElement.append(".");
  });
}

async function waitMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateScroll() {
  oldTextElement.scrollTop(oldTextElement[0].scrollHeight);
}

function checkForEmptyCommand(command) {
  return command.length == 0 || (command != null && command.trim() !== "");
}
