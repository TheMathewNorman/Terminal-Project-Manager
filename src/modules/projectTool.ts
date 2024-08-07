import * as dotenv from "dotenv";
import figlet from "figlet";
import * as os from "os";
import * as fs from "fs";

import { Project } from "../types/projectInterface";

dotenv.config();

export const PROJECTS_FILE_PATH =
  process.env.PROJECTS_FILE_PATH || "../data/projects.json";
export const PROJECTS_DIRECTORY =
  process.env.PROJECTS_DIRECTORY || os.homedir() + "/Documents";

/**
 * Initialise the project
 */
export function init() {
  if (!fs.existsSync(PROJECTS_DIRECTORY)) {
    console.error("Projects directory does not exist: ", PROJECTS_DIRECTORY);
    process.exit(1);
  }

  if (!fs.existsSync(PROJECTS_FILE_PATH)) {
    console.error("Projects file does not exist: " + PROJECTS_FILE_PATH);
    process.exit(1);
  }

  // Show intro splash
  console.clear();
  console.log();
  console.log(
    figlet.textSync("Project Manager", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    }).bgBlack.green
  );
  console.log();
}

export function getProjects(): Project[] {
  return loadProjects();
}
export function setProjects(project_data: Project[]) {
  saveProjects(project_data);
}

/**
 * Load projects data from file
 * @returns Projects data
 */
function loadProjects() {
  return JSON.parse(fs.readFileSync(PROJECTS_FILE_PATH, "utf-8"));
}

function saveProjects(project_data: Project[]) {
  fs.writeFileSync(
    PROJECTS_FILE_PATH,
    JSON.stringify(project_data, null, 2),
    "utf-8"
  );
}
