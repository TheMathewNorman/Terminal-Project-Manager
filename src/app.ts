#!/usr/bin/env node

// Import the project file data
import projectData from '../data/projects.json'

// Import external modules
import { Command } from 'commander'
import * as fs from 'fs'


// Import internal modules
import { Project } from './types/projectInterface'

/**
 * The program
 */

