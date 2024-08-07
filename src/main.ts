// Import external modules
import "colorts/lib/string";

// Initialise Project

// Import internal modules
import { Project } from "./types/projectInterface";
import { init, getProjects } from "./modules/projectTool";
import * as projectManagement from "./modules/projectManagement";
import * as projectPrompts from "./modules/projectPrompts";

// Initialise program
init();

// Load projects data
const projectsData: Project[] = getProjects();

// Primary functionality
async function main() {
  let action = await projectPrompts.programOptions();

  // Respond to user input
  while (action !== "exit") {
    switch (action) {
      case "list_projects":
        await projectManagement.listProjects(projectsData);
        break;
      case "add_project":
        await projectManagement.addProject();
        break;
      case "remove_project": {
        // Prompt user to select one of their projects
        const selected_project = await projectPrompts.selectProject(
          projectsData
        );

        projectManagement.removeProject(projectsData, selected_project);
        break;
      }
      case "modify_project":
        projectManagement.editProject(projectsData, "");
        break;
      // TODO: Future functionality: add ability to create and store project specific launch scripts
      //case "launch_project":
      //  projectManagement.launchProject(projectsData, "");
      //  break;
      case "exit":
        console.log("Exiting program");
        process.exit(0);
        break;
      default:
        console.log("Invalid option");
    }

    action = await projectPrompts.programOptions();
  }
}

main();
