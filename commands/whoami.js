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