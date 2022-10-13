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
    oldTextElement.append(histStr);
  }
  if (commandParts.length == 2) {
    if (commandParts[1] === "--commands") {
      console.log(commandHistory);
      for (x in commandHistory) {
        let num = parseInt(x) + 1;
        oldTextElement.append(num + " " + commandHistory[x] + newLine);
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
        "<tab20>React Native</tab20>" +
        newLine +
        "<tab20>React</tab20>" +
        newLine +
        newLine;

      let feBuild =
        "Front end build tools experience:" +
        "&nbsp;NPM" +
        newLine +
        "<tab203>Yarn</tab203>";
      newLine;

      let testExp =
        "FE testing experience:" +
        " Jasmine" +
        newLine +
        "                       Karma";
      newLine + "                       Jest";

      oldTextElement.append(newLine);
      oldTextElement.append(feLang);
      oldTextElement.append(feLibraries);
      oldTextElement.append(feBuild);
      oldTextElement.append(newLine);
      oldTextElement.append(testExp);
      oldTextElement.append(newLine);
      oldTextElement.append(newLine);
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
        newLine +
        "<tab15>Entity Framework Core</tab15>" +
        newLine +
        "<tab15>LINQ</tab15>" +
        newLine;

      let beBuild =
        "Back end build tools experience:" +
        "&nbsp;Gradle" +
        newLine +
        "<tab20>&nbsp;&nbsp;Maven</tab20>" +
        newLine +
        "<tab20>&nbsp;&nbsp;csproj</tab20>" +
        newLine +
        "<tab20>&nbsp;&nbsp;sln</tab20>" +
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
        "                       nUnit" +
        newLine +
        "                       TestNG" +
        newLine;

      let cloudExp =
        "Back end cloud experience: " +
        "&nbsp; Azure FunctionApps" +
        newLine +
        "<tab15>Azure Message Buses</tab15>" +
        newLine +
        "<tab15>NATS</tab15>" +
        newLine +
        "<tab15>NATS Streaming</tab15>" +
        newLine;

      oldTextElement.append(newLine);
      oldTextElement.append(beLang);
      oldTextElement.append(beLibraries);
      oldTextElement.append(beBuild);
      oldTextElement.append(apiExp);
      oldTextElement.append(apiDocExp);
      oldTextElement.append(newLine);
      oldTextElement.append(testExp);
      oldTextElement.append(cloudExp);
      oldTextElement.append(newLine);
      oldTextElement.append(newLine);
    }

    if (commandParts[1] == "--sdlc") {
      let devOps =
        "Utilized DevOps tools: Azure DevOps" +
        newLine +
        "                       Jenkins" +
        newLine +
        "                       GitHub" +
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

      oldTextElement.append(newLine);
      oldTextElement.append(devOps);
      oldTextElement.append(devOpsExp);
      oldTextElement.append(newLine);
      oldTextElement.append(vcsExp);
      oldTextElement.append(newLine);
      oldTextElement.append(methodExp);
      oldTextElement.append(newLine);
      oldTextElement.append(newLine);
    }

    if (commandParts[1] == "--education") {
      let education =
        "Graduated with a bachelors in Computer Science from " +
        newLine +
        "          The University of Texas at Arlington" +
        newLine +
        newLine +
        "Graduated with an associates of Science from " +
        newLine +
        "          Northlake Community College" +
        newLine;

      oldTextElement.append(newLine);
      oldTextElement.append(education);
      oldTextElement.append(newLine);
      oldTextElement.append(newLine);
    }
  }
}
