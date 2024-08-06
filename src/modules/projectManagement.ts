import { input, confirm } from '@inquirer/prompts'
import fs from 'fs'

import { Project } from '../types/projectInterface'

const projectsFilePath = '/Users/matnorman/Projects/Personal/project-manager/data/projects.json'

export async function addProject() {
    
    let newProject: Project = {
        project_name: '',
        project_description: '',
        project_is_headless: false,
        project_paths: {
            root: '',
            vscode_workspace_path: ''
        }
    }

    newProject.project_name = await input({ message: 'Enter project name' })
    newProject.project_description = await input({ message: 'Enter project description' })
    newProject.project_is_headless = await confirm({ message: 'Is the project headless?' })

    newProject.project_paths.root = await input({ message: 'Enter project path' })
    
    const vscode_workspace_path = await input({ message: 'Enter vscode workspace path' })
    let project_frontend_path: string | undefined
    let project_backend_path: string | undefined

    if (is_headless) {
        project_frontend_path = await input({ message: 'Enter project frontend path' })
        project_backend_path = await input({ message: 'Enter project backend path' })
    }

    const newProject: Project = {
        project_name,
        project_description,
        project_is_headless: is_headless,
        project_path: {
            root: project_path,
            frontend: project_frontend_path || undefined,
            backend: project_backend_path || undefined,
            vscode_workspace_path
        }
    }

    fs.readFile(projectsFilePath, 'utf-8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
          console.error('Error reading projects file:', err);
          return;
        }

        const projects: Project[] = data ? JSON.parse(data) : [];
        projects.push(newProject);

        fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2), (err) => {
          if (err) {
            console.error('Error writing projects file:', err);
            return;
          }

          console.log('Project created successfully!');
        });
    });
}