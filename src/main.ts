// Import external modules
import fs, { PathLike } from 'fs'
import path from 'path'

import {select} from '@inquirer/prompts'

// Initialise Project


// Import internal modules
import { Project } from './types/projectInterface'
import * as projectTool from './modules/config'
import * as projectManagement from './modules/projectManagement'
import * as projectPrompts from './modules/prompts'

/**
 * The program
 */
projectTool.init()

const projectsData = projectTool.loadProjects(projectTool.PROJECTS_FILE_PATH)

console.log(projectsData);

// projectManagement.addProject(projectTool.PROJECTS_FILE_PATH)

projectPrompts.programOptions()


