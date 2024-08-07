import { input, confirm } from "@inquirer/prompts";
import fs from "fs";
import "colorts/lib/string";

import { Project } from "../types/projectInterface";
import { PROJECTS_FILE_PATH } from "./projectTool";

/**
 * Add a new project
 * @param projects_file_path Filepath to the projects file
 */
export async function addProject() {
  const newProject: Project = {
    project_name: "",
    safe_name: "",
    project_description: "",
    project_is_headless: false,
    project_paths: {
      root: "",
      vscode_workspace_path: "",
    },
  };

  /**
   * Get project data from user input
   */
  newProject.project_name = await input({ message: "Enter project name" });

  // Prompt for safe name - default to kebab case of project name
  newProject.safe_name = await input({
    message: `Enter safename? (${newProject.project_name.kebabCase})`,
    default: newProject.project_name.kebabCase,
  });
  newProject.project_description = await input({
    message: "Enter project description",
  });
  newProject.project_is_headless = await confirm({
    message: "Is the project headless?",
  });

  newProject.project_paths.root = await input({
    message: "Enter project path",
  });
  newProject.project_paths.vscode_workspace_path = await input({
    message: "Enter vscode workspace path",
  });

  // If the project is headless define a separate frontend and backend path
  if (newProject.project_is_headless) {
    newProject.project_paths.frontend = await input({
      message: "Enter project frontend path",
    });
    newProject.project_paths.backend = await input({
      message: "Enter project backend path",
    });
  }

  fs.readFile(PROJECTS_FILE_PATH, "utf-8", (err, data) => {
    if (err && err.code !== "ENOENT") {
      console.error("Error reading projects file:", err);
      return;
    }

    const projects: Project[] = data ? JSON.parse(data) : [];
    projects.push(newProject);

    fs.writeFile(
      PROJECTS_FILE_PATH,
      JSON.stringify(projects, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing projects file:", err);
          return;
        }

        console.log("Project created successfully!");
      }
    );
  });
}

export function removeProject(projects_data: Project[], project_name: string) {
  console.log("Removing: ", project_name);

  // Create a copy of the project data without the specified entry
  const project_data_updated: Project[] = projects_data.filter(
    (project) => project.safe_name !== project_name
  );

  console.log();
  console.log("Updated project list: ");
  project_data_updated.forEach((project) => console.log(project.project_name));
}

export async function listProjects(projects_data: Project[]) {
  // Prompt to show full project information
  const details = await confirm(
    {
      message: "Show details? (n)",
      default: false,
    },
    {
      clearPromptOnDone: true,
    }
  );

  if (projects_data.length !== 0) {
    console.log("--------------------------------\n");

    projects_data.forEach((project: Project) => {
      console.log(
        `${project.project_name}`.bold +
          `${project.safe_name ? ` (${project.safe_name})`.italic.dim : ""}`
      );
      console.log();
      console.log(
        `${
          project.project_description
            ? project.project_description
            : "No description"
        }`.italic
      );

      if (details) {
        console.log();
        console.log(`Details:`.bold);
        console.log();

        console.log(
          "Headless: ".bold + `${project.project_is_headless ? "Yes" : "No"}`
        );

        if (project.project_paths) {
          console.log(
            "Project root: ".bold + `${project.project_paths.root.italic}`
          );
          console.log(
            "VSCode workspace: ".bold +
              `${
                project.project_paths.vscode_workspace_path
                  ? project.project_paths.vscode_workspace_path.italic
                  : "--".italic
              }`
          );

          if (project.project_is_headless) {
            console.log(
              "Frontend path: ".bold +
                `${
                  project.project_paths.frontend
                    ? project.project_paths.frontend.italic
                    : "--".italic
                }`
            );
            console.log(
              "Backend path: ".bold +
                `${
                  project.project_paths.backend
                    ? project.project_paths.backend.italic
                    : "--".italic
                }`
            );
          }
        }
      }

      console.log("\n--------------------------------\n");
    });
  } else {
    console.log();
    console.log("No projects found".italic);
    console.log();
  }
}

// TODO: Future functionality: add ability to create and store project specific launch scripts
// export function launchProject(projects_data: Project[], project_name: string) {}

export function editProject(projects_data: Project[], project_name: string) {
  console.log(
    `Edit project function. Data: ${
      projects_data.length > 0 ? "yes" : "no"
    } | Name: ${project_name}`
  );
}
