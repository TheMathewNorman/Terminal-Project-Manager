import { input, confirm } from '@inquirer/prompts'
import fs from 'fs'

import { Project } from '../types/projectInterface'

/**
 * Add a new project
 * @param projects_file_path Filepath to the projects file
 */
export async function addProject(projects_file_path: string) {
    
    const newProject: Project = {
        project_name: '',
        project_description: '',
        project_is_headless: false,
        project_paths: {
            root: '',
            vscode_workspace_path: ''
        }
    }

    // Get project data from user input
    newProject.project_name = await input({ message: 'Enter project name' })
    newProject.project_description = await input({ message: 'Enter project description' })
    newProject.project_is_headless = await confirm({ message: 'Is the project headless?' })

    newProject.project_paths.root = await input({ message: 'Enter project path' })
    newProject.project_paths.vscode_workspace_path = await input({ message: 'Enter vscode workspace path' })

    // If the project is headless define a separate frontend and backend path
    if (newProject.project_is_headless) {
        newProject.project_paths.frontend = await input({ message: 'Enter project frontend path' })
        newProject.project_paths.backend = await input({ message: 'Enter project backend path' })
    }

    fs.readFile(projects_file_path, 'utf-8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
          console.error('Error reading projects file:', err);
          return;
        }

        const projects: Project[] = data ? JSON.parse(data) : [];
        projects.push(newProject);

        fs.writeFile(projects_file_path, JSON.stringify(projects, null, 2), (err) => {
          if (err) {
            console.error('Error writing projects file:', err);
            return;
          }

          console.log('Project created successfully!');
        });
    });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function removeProject(project_data: Project[], project_name: string) {
    // TODO: add remove project functionality
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function listProjects(projects_data: Project[]) {
    // TODO: add list projects functionality
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function openProject(projects_data: Project[], project_name: string) {
    // TODO: add open project functionality
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function editProject(project_data: Project[], project_name: string) {
    // TODO: add edit project functionality
}