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
        newLine;

      old.append(newLine);
      old.append(beLang);
      old.append(beLibraries);
      old.append(beBuild);
      old.append(apiExp);
      old.append(apiDocExp);
      old.append(newLine);
      old.append(testExp);
      old.append(cloudExp);
      old.append(newLine);
      old.append(newLine);
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
