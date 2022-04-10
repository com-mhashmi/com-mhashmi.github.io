var cons;
var old;
let consoleText = "#consoleText";
let oldText = "#oldText";
let userText = "root@SyedIsamHashmi:~# ";
let newLine = "<br />";
var command = "";
var commandHistory = [];
let welcomeText =
  'Welcome to mhashmi.com. To get started, please interact below. (Not tech savvy? Mobile? Click <a href="./orig/index.html">here to go to the main website</a>.)' +
  newLine +
  newLine +
  "This is my interactive resume!" +
  newLine +
  'To view my actual resume, click <a href="www.mhashmi.com/resume.pdf">here</a>!' +
  newLine;

$(document).ready(function () {
  cons = $(consoleText);
  cons.hide();
  old = $(oldText);
  old.append("Logging in");

  sleepTest(500).then(() => {
    old.append(".");
    sleepTest(500).then(() => {
      old.append(".");
      sleepTest(500).then(() => {
        old.append(".");
        sleepTest(500).then(() => {
          old.append(newLine + welcomeText + newLine);
          cons.append(userText);
          cons.show();
          $(document).keydown(function (event) {
            // console.log(event.keyCode);
            var character = event.key;
            switch (event.key) {
              case "Tab":
              case "Alt":
              case "Control":
              case "Shift":
              case "Meta":
              case "ArrowUp":
              case "ArrowDown":
              case "ArrowLeft":
              case "ArrowRight":
              case "CapsLock":
              case "Delete":
                return;
              case "Backspace":
                command = command.slice(0, -1);
                cons.text(userText + command);
                updateScroll();
                return;
              case "Enter": //Enter key
                //   console.log("command is: " + command);
                old.append(cons.text());
                old.append(newLine);
                processCommand(command);
                let toAdd = command;
                commandHistory.push(toAdd);
                command = "";

                cons.text(userText);
                updateScroll();
                return;
              default:
                command = command.concat(character);
                // console.log(command);
                cons.append(character);
                updateScroll();
            }
          });
        });
      });
    });
  });
  updateScroll();
  //   consoleText.focus();
});

function updateScroll() {
  old = $(oldText);
  old.scrollTop(old[0].scrollHeight);
}

function processCommand(command) {
  command = command.trim();
  commandParts = command.split(" ");

  if (command.length == 0) {
    return;
  }
  console.log(commandParts);

  if (!commands.includes(commandParts[0])) {
    old.append(
      "bash: " + commandParts.join(" ") + " command not found" + newLine
    );
  }
  switch (commandParts[0]) {
    case commands[0]: // help
      help(commandParts);
      return;
    case commands[1]: // whoami
      whoami(commandParts);
      old.append(newLine);
      return;
    case commands[2]: // ping
      ping();
      old.append(newLine);
      return;
    case commands[3]: // history
      printHistory(commandParts);
      return;
    case commands[4]: // cls
      clearScreen();
  }
}

function sleepTest(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
