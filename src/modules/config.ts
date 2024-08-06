import * as dotenv from 'dotenv'
import * as os from 'os'
import * as fs from 'fs'

dotenv.config()

export const PROJECTS_FILE_PATH = process.env.PROJECTS_FILE_PATH || "../data/projects.json"
export const PROJECTS_DIRECTORY = process.env.PROJECTS_DIRECTORY || os.homedir() + "/Documents"

/**
 * Initialise the project
 */
export function init() {

    if (!fs.existsSync(PROJECTS_DIRECTORY)) {
        console.error("Projects directory does not exist: ", PROJECTS_DIRECTORY)
        process.exit(1)
    }

    if (!fs.existsSync(PROJECTS_FILE_PATH)) {
        console.error("Projects file does not exist: " + PROJECTS_FILE_PATH)
        process.exit(1)
    }

}

/**
 * Load projects data from file
 * 
 * @param project_file_path Filepath to the projects file
 * @returns Projects data
 */
export function loadProjects(project_file_path: string) {
    return JSON.parse(fs.readFileSync(project_file_path, 'utf-8'))
}