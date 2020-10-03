var cons;
var old;
let consoleText = "#consoleText";
let oldText = "#oldText";
let userText = "root@SyedIsamHashmi:~# ";
let newLine = "<br />";
var command = "";
var commandHistory = [];
let welcomeText =
  'Welcome to mhashmi.com. To get started, please interact below. (Not tech savvy? Click <a href="./orig/index.html">here</a>)';
let commands = ["help", "whoami", "ping", "history", "cls"];
let usage = [
  "help: help [NAME]" + newLine,
  "whoami: whoami [--you]" + newLine,
  "ping: ping" + newLine,
  "history: history [--fe | --be | --sdlc | --skills | --education | --commands]" +
    newLine,
  "cls: cls" + newLine,
];
let descriptions = [
  //0 Begin help help display text
  newLine +
    "Display information about builtin commands." +
    newLine +
    newLine +
    "&nbsp;Displays brief summaries of builtin commands. If NAME is " +
    newLine +
    "&nbsp;specified, gives detailed help on all commands matching NAME" +
    newLine +
    "&nbsp;otherwise the list of help topics is printed" +
    newLine,
  //0 End help help display text

  //1 Begin help whoami display text
  newLine +
    "Display information about me!" +
    newLine +
    newLine +
    "&nbsp;Displays a brief summary based on parameter" +
    newLine +
    newLine +
    "&nbsp;Options: " +
    newLine +
    "&nbsp;&nbsp;--you&nbsp;&nbsp;Output information about you!" +
    newLine,
  //1 End help whoami display text

  //2 Begin help ping display text
  newLine + "Information on how to contact me!" + newLine,
  //2 End help ping display text

  //3 Begin help history display text
  newLine +
    "Display information about my history." +
    newLine +
    newLine +
    "&nbsp;Displays history. " +
    newLine +
    newLine +
    "&nbsp;Options: " +
    newLine +
    "&nbsp;&nbsp;--fe          Output information about my front-end experience." +
    newLine +
    "&nbsp;&nbsp;--be          Output information about my back-end experience." +
    newLine +
    "&nbsp;&nbsp;--sdlc        Output information about my general dev experience." +
    newLine +
    "&nbsp;&nbsp;--skills      Output information about my skills that" +
    newLine +
    "<tab10>have not been put to professional use (yet!).</tab10>" +
    newLine +
    "&nbsp;&nbsp;--education   Output information about my education." +
    newLine +
    "&nbsp;&nbsp;--commands    Output commands run so far, because... why not? :)" +
    newLine,
  //3 End help history display text

  //4 Begin help cls display text
  newLine + "&nbsp;&nbsp;Clears the screen" + newLine,
  //4 End help cls display text
];

$(document).ready(function () {
  cons = $(consoleText);
  cons.hide();
  old = $(oldText);
  old.append("Logging in");

  sleepTest(500).then(() => {
    old.append(".");
  });
  sleepTest(1000).then(() => {
    old.append(".");
  });
  sleepTest(1500).then(() => {
    old.append(".");
  });

  sleepTest(2000).then(() => {
    old.append(newLine + welcomeText + newLine);
    cons.append(userText);
    cons.show();
  });

  updateScroll();
  //   consoleText.focus();
});

$(document).keypress(function (event) {
  console.log(event.keyCode);
  var character = String.fromCharCode(event.keyCode);
  switch (event.keyCode) {
    case 8:
      command = command.slice(0, -1);
      cons.text(userText + command);
      updateScroll();
      return;
    case 13: //Enter key
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
      //   console.log(command);
      cons.append(character);
      updateScroll();
  }
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
    old.append("bash: " + commandParts + " command not found" + newLine);
  }
  switch (commandParts[0]) {
    case commands[0]:
      help(commandParts);
      return;
    case commands[1]:
      whoami(commandParts);
      old.append(newLine);
      return;
    case commands[2]:
      ping();
      old.append(newLine);
      return;
    case commands[3]:
      printHistory(commandParts);
      return;
    case commands[4]:
      clearScreen();
  }
}

function ping(command) {
  let pingStr =
    newLine +
    "Feel free to contact me!" +
    newLine +
    newLine +
    " First Name   |--||----|     Last Name    " +
    newLine +
    "              is@mhashmi.com             " +
    newLine +
    " E-mail       |------------|             " +
    newLine +
    "                 |---------| Website     " +
    newLine +
    newLine +
    " Phone number: (214)862-5071            " +
    newLine +
    newLine;
  old.append(pingStr);
}

function help(command) {
  if (command.length == 1) {
    old.append(newLine);
    old.append(
      "ISAM bash, version 1.1(1)-release (x86_64-pc-linux-gnu)" + newLine
    );
    old.append(
      "These shell commands are defined internally. Type 'help' to see this list." +
        newLine
    );
    old.append(
      "Type 'help name' to find out more about the function 'name'." + newLine
    );
    old.append("A star (*) next to a name means that the command is disabled");
    old.append(newLine);
    old.append(newLine);
    for (var x = 0; x < usage.length; x++) {
      old.append(usage[x]);
    }
    old.append(newLine);
    return;
  }
  switch (command[1]) {
    case commands[0]: //Help
      old.append(newLine);
      old.append(usage[0]);
      old.append(descriptions[0]);
      old.append(newLine);
      return;
    case commands[1]: //Whoami
      old.append(newLine);
      old.append(usage[1]);
      old.append(descriptions[1]);
      old.append(newLine);
      return;

    case commands[2]: //Ping
      old.append(newLine);
      old.append(usage[2]);
      old.append(descriptions[2]);
      old.append(newLine);
      return;

    case commands[3]: //History
      old.append(newLine);
      old.append(usage[3]);
      old.append(descriptions[3]);
      old.append(newLine);
      return;

    case commands[4]: //Cls
      old.append(newLine);
      old.append(usage[4]);
      old.append(descriptions[4]);
      old.append(newLine);
      return;
  }
}

function whoami(command) {
  //TODO
  if (command.length == 1) {
    old.append("Information about me!");
    old.append(newLine);
    return;
  }
  switch (command[1]) {
    case "--you":
      old.append(
        "You seem like a cool person, diving into the help menu was resourceful..." +
          newLine +
          "You could be my next boss!" +
          newLine +
          "What do you think? Why don't you 'ping' me! ;)"
      );
      old.append(newLine);
      return;
  }
}

function clearScreen() {
  old.text("");
  updateScroll();
}

function sleepTest(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function printHistory(command) {
  if (commandParts.length == 1) {
    let histStr =
      newLine +
      "Software engineer by heart. Have been since I was ten years old." +
      newLine +
      "I have a passion for computer science, and a craving for knowledge that I have yet to quench." +
      newLine +
      "If you would like more detailed information about me, keep exploring!" +
      newLine +
      newLine;
    old.append(histStr);
  }
  if (commandParts.length == 2) {
    if (commandParts[1] === "--commands") {
      for (x in commandHistory) {
        let num = parseInt(x) + 1;
        old.append(num + " " + commandHistory[x] + newLine);
      }
    }

    if (commandParts[1] === "--fe") {
      let feLang =
        "I have developed professional front ends utilizing:" +
        " HTML" +
        newLine +
        "<tab33>JavaScript</tab33>" +
        newLine +
        "<tab33>TypeScript</tab33>" +
        newLine +
        "<tab33>SCSS</tab33>" +
        newLine +
        "<tab33>CSS</tab33>" +
        newLine;

      let feLibraries =
        "Front ends library experience:" +
        "&nbsp;Angular" +
        newLine +
        "<tab20>RxJS</tab20>" +
        newLine +
        // "<tab20>Node.JS (amateur)</tab20>" + TODO skills
        newLine;

      let feBuild =
        "Front end build tools experience:" +
        "&nbsp;NPM" +
        // "<tab20>Node.JS (amateur)</tab20>" + TODO skills
        newLine;

      let testExp =
        "FE testing experience:" +
        " Jasmine" +
        newLine +
        "                       Karma";

      old.append(newLine);
      old.append(feLang);
      old.append(feLibraries);
      old.append(feBuild);
      old.append(newLine);
      old.append(testExp);
      old.append(newLine);
      old.append(newLine);
    }

    if (commandParts[1] === "--be") {
      let beLang =
        "I have developed professional backends in: Java" +
        newLine +
        "<tab38>C#</tab38>" +
        newLine;

      let beLibraries =
        "Back end library experience:" +
        "&nbsp;Spring" +
        newLine +
        "<tab15>SpringBoot</tab15>" +
        newLine +
        "<tab15>.NET Core</tab15>" +
        newLine;

      let beBuild =
        "Back end build tools experience:" +
        "&nbsp;Gradle" +
        newLine +
        "<tab20>&nbsp;&nbsp;Maven</tab20>" +
        newLine +
        "<tab20>&nbsp;&nbsp;DotNET</tab20>" +
        newLine;

      let apiExp =
        "API experience:" +
        "&nbsp;REST" +
        newLine +
        "<tab10 style='padding-left: 9.54em;'>SOAP</tab10>" +
        newLine;

      let apiDocExp =
        "API documentation experience:" + "&nbsp;Swagger" + newLine;

      let testExp =
        "BE testing experience:" +
        " JUnit" +
        newLine +
        "                       TestNG";

      old.append(newLine);
      old.append(beLang);
      old.append(beLibraries);
      old.append(beBuild);
      old.append(apiExp);
      old.append(apiDocExp);
      old.append(newLine);
      old.append(testExp);
      old.append(newLine);
      old.append(newLine);
    }

    if (commandParts[1] == "--sdlc") {
      let devOps =
        "Utilized DevOps tools: Azure DevOps" +
        newLine +
        "                       Jenkins" +
        newLine;
      let devOpsExp =
        "//Developed pipelines." +
        newLine +
        "//Generated artifacts." +
        newLine +
        "//Created deployments." +
        newLine;

      let vcsExp = "VCS/SCM experience: Git" + newLine;

      let methodExp =
        "Development methodologies: Agile" +
        newLine +
        "                           Scrum" +
        newLine +
        "                           Kanban" +
        newLine;

      old.append(newLine);
      old.append(devOps);
      old.append(devOpsExp);
      old.append(newLine);
      old.append(vcsExp);
      old.append(newLine);
      old.append(methodExp);
      old.append(newLine);
      old.append(newLine);
    }

    // if (commandParts[1] === "--hobby") {
    //   for (x in commandHistory) {
    //     let num = parseInt(x) + 1;
    //     old.append(num + " " + commandHistory[x] + newLine);
    //   }
    // }
  }
}
