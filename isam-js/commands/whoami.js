function whoami(command) {
  if (command.length == 1) {
    oldTextElement.append(
      "I have been in the industry for over " +
        (new Date().getFullYear() - 2018) +
        " years "
    );
    oldTextElement.append(newLine);
    oldTextElement.append(
      "Although, I have been coding for well over " +
        (new Date().getFullYear() - 2005) +
        " years!"
    );
    oldTextElement.append(newLine);
    return;
  }
  switch (command[1]) {
    case "--you":
      oldTextElement.append(
        "You seem like a cool person, diving into the help menu was resourceful..." +
          newLine +
          "You could be my next boss!" +
          newLine +
          "What do you think? Why don't you 'ping' me! ;)"
      );
      oldTextElement.append(newLine);
      return;
  }
}
