#!/usr/bin/env node

// Interface for the project data paths
export interface ProjectPath {
  root: string;
  frontend?: string;
  backend?: string;
  vscode_workspace_path?: string;
}

// Interface for the project data
export interface Project {
  project_name: string;
  safe_name: string;
  project_description: string;
  project_is_headless: boolean;
  project_paths: ProjectPath;
}
