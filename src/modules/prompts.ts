import * as inquirer from '@inquirer/prompts';
import { Project } from '../types/projectInterface';

interface Choice {
    name: string;
    value: string;
}

export function projectChoices(projects_data: Project[]): Choice[] {
    const choices: Choice[] = [];

    projects_data.forEach((project: Project) => {
        choices.push({ name: project.project_name, value: project.project_name });
    });

    return choices;
}

/**
 * Prompt the user to select a desired action
 */
export async function programOptions() {
    const answer = await inquirer.select({
        message: 'Select an option',
        choices: [
            {
                name: 'Add a new project',
                value: 'add_project'
            },
            {
                name: 'Remove a project',
                value: 'remove_project'
            },
            {
                name: 'Modify a project',
                value: 'modify_project'
            },
            {
                name: 'Select a project',
                value: 'select_project'
            },
            {
                name: 'Exit',
                value: 'exit'
            }
        ]
    });

    // TODO: Add functionality for each option
    switch (answer) {
        case 'add_project':
            console.log('Add a new project');
            break;
        case 'remove_project':
            console.log('Remove a project');
            break;
        case 'modify_project':
            console.log('Modify a project');
            break;
        case 'select_project':
            console.log('Select a project');
            break;
        case 'exit':
            console.log('Exit');
            break;
    }
}