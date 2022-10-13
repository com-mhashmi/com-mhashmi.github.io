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
  switch (event.key) {
    case "Tab":
    case "Alt":
    case "Control":
    case "Shift":
    case "Meta":

    case "ArrowLeft":
    case "ArrowRight":
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
      // Add current typed line to history.
      oldTextElement.append(consoleTextElement.text());
      // Add buffer for new console line to type in.
      oldTextElement.append(newLine);
      // Let's see what you typed.
      processCommand(command);
      // Regardless of what you typed, add to your history.
      // Except if it's whitespace only...
      if (!checkForEmptyCommand(command)) {
        commandHistory.push(command);
      }
      // And reset your current command.
      command = "";
      // Reset current console typing area text.
      consoleTextElement.text(userText);
      updateScroll();
      // Reset any up/down arrow traversal.
      currentCommandInHistory = 0;
      return;
    default:
      command = command.concat(character);
      // console.log(command);
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
