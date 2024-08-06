// Import external modules
import 'colorts/lib/string'

// Initialise Project


// Import internal modules
import { Project } from './types/projectInterface'
import * as projectTool from './modules/projectTool'
import * as projectManagement from './modules/projectManagement'
import * as projectPrompts from './modules/projectPrompts'

/**
 * The program
 */
projectTool.init()

// Load projects data
const projectsData: Project[] = projectTool.loadProjects(projectTool.PROJECTS_FILE_PATH)

async function main() {
    let action = await projectPrompts.programOptions()

    // Respond to user input
    while (action !== 'exit') {
        switch (action) {
            case 'list_projects':
                await projectManagement.listProjects(projectsData)
                break
            case 'add_project':
                await projectManagement.addProject(projectTool.PROJECTS_FILE_PATH)
                break
            case 'remove_project':
                console.log('Remove project'.blue)
                break
            case 'modify_project':
                console.log('Modify project')
                break
            case 'select_project':
                console.log('Select project'.blue)
                break
            case 'exit':
                console.log('Exiting program')
                process.exit(0)
                break
            default:
                console.log('Invalid option')
        }

        action = await projectPrompts.programOptions()
    }
}

main()


