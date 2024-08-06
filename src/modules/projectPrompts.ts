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
export async function programOptions(): Promise<string> {
    const answer = await inquirer.select({
        message: 'Select an option',
        choices: [
            {
                name: 'List projects',
                value: 'list_projects'
            },
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
    }, { clearPromptOnDone: true });

    return answer;
}