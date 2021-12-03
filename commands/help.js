let commands = ["help", "whoami", "ping", "history", "cls"];
let usage = [
  "help: help [NAME]" + newLine,
  "whoami: whoami [--you]" + newLine,
  "ping: ping" + newLine,
  "history: history [--fe | --be | --sdlc | --skills | --education | --commands]" + newLine,
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