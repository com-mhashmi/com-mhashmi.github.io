function whoami(command) {
  if (command.length == 1) {
    old.append(
      "I have been in the industry for " +
        (new Date().getFullYear() - 2018) +
        " years "
    );
    old.append(newLine);
    old.append(
      "Although, I have been coding for well over " +
        (new Date().getFullYear() - 2005) +
        " years!"
    );
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
