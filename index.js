const FLAG__DO_BOOT_SEQUENCE = true;

// Once we are ready, load the main loop for entering and processing commands.
$(document).ready(mainLoop);

async function mainLoop() {
  setupGlobalVariables();

  await bootSequence();

  $(document).keydown(handleKeyPress);
  updateScroll();
}

async function bootSequence() {
  console.debug("Performing boot sequence");
  // Who wants to wait 2seconds while developing locally???
  if (FLAG__DO_BOOT_SEQUENCE) {
    // hide console input text while displaying login sequence.
    consoleTextElement.hide();

    oldTextElement.append("Logging in");
    await printPeriod();
    await printPeriod();
    await printPeriod();
    oldTextElement.append(newLine);
    waitMs(500);
  }

  oldTextElement.append(welcomeText);
  consoleTextElement.append(userText);
  consoleTextElement.show();
}

function handleKeyPress(event) {
  var character = event.key;
  switch (character) {
    case "Tab":
    case "Alt":
    case "Control":
    case "Shift":
    case "Meta":
      return;
    case "ArrowRight":
      command = command + postcommand.substring(0, 1);
      postcommand = postcommand.substring(1);
      consoleTextElement.text(userText + command);
      postConsoleTextElement.text(postcommand);
      updateScroll();
      return;
    case "ArrowLeft":
      postcommand = command.substring(command.length - 1) + postcommand;
      command = command.slice(0, -1);
      consoleTextElement.text(userText + command);
      postConsoleTextElement.text(postcommand);
      updateScroll();
      return;
    case "CapsLock":
    case "Delete":
      return;
    case "Backspace":
      command = command.slice(0, -1);
      consoleTextElement.text(userText + command);
      updateScroll();
      return;

    // Handle history traveral up
    case "ArrowUp": {
      // Don't allow user to go up past the last entered command.
      if (currentCommandInHistory > commandHistory.length) {
        return;
      }
      currentCommandInHistory += 1;
      console.debug("Going up in history...");
      handleArrowCommand();
      return;
    }
    // Handle history traveral down
    case "ArrowDown": {
      // Don't allow user to go down past "nothing"
      if (currentCommandInHistory <= 0) {
        return;
      }
      currentCommandInHistory -= 1;
      console.debug("Going down in history...");
      handleArrowCommand();
      return;
    }

    case "Enter":
      let fullCommand = command + postcommand;
      // Add current typed line to history.
      oldTextElement.append(consoleTextElement.text() + postcommand);
      // Add buffer for new console line to type in.
      oldTextElement.append(newLine);
      // Let's see what you typed.
      processCommand(fullCommand);
      // Regardless of what you typed, add to your history.
      // Except if it's whitespace only...
      if (!checkForEmptyCommand(fullCommand)) {
        commandHistory.push(fullCommand);
      }
      // And reset your current command.
      postcommand = ""
      command = "";
      // Reset current console typing area text.
      consoleTextElement.text(userText);
      postConsoleTextElement.text(postcommand);
      updateScroll();
      // Reset any up/down arrow traversal.
      currentCommandInHistory = 0;
      return;
    default:
      if (event.key == 'k' && event.metaKey) {
        clearScreen();
        return;
      }
      command = command.concat(character);
      consoleTextElement.append(character);
      updateScroll();
  }
}

function processCommand(command) {
  command = command.trim();
  commandParts = command.split(" ");

  if (checkForEmptyCommand(command)) {
    return;
  }

  if (!commands.includes(commandParts[0])) {
    oldTextElement.append(
      "bash: " + commandParts.join(" ") + " command not found" + newLine
    );
  }
  switch (commandParts[0]) {
    case commands[0]: // help
      help(commandParts);
      return;
    case commands[1]: // whoami
      whoami(commandParts);
      oldTextElement.append(newLine);
      return;
    case commands[2]: // ping
      ping();
      oldTextElement.append(newLine);
      return;
    case commands[3]: // history
      printHistory(commandParts);
      return;
    case commands[4]: // cls
      clearScreen();
  }
}

function handleArrowCommand() {
  let currentCommand =
    commandHistory[commandHistory.length - currentCommandInHistory];
  console.log(
    "Current command from history:",
    currentCommand,
    currentCommandInHistory
  );
  command = currentCommand ?? "";
  consoleTextElement.text(userText + command);
}
