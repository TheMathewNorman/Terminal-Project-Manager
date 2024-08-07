# JSON Project Manager

:construction: This project is a work in progress! Fundamental functionality is still missing.

`TLDR A CLI based software development project management tool using JSON`

I built this tool to help me deal with the many projects I have installed and setup for work.

I wanted a means of storing a registry of all my code projects, their locations and other details in a way that would be easily accessile by other programs/tools I may create later on.

I decided that the JSON format would be a good way of storing this information as it is easily digestable by most modern languages and this tool exists as a means of managing that JSON file without needing to resort to directly editing the data every time.

As for why I chose to build it using TS-Node? I live in iTerm but wanted to cross-platform support, ease-of-development and functionality provided by Typescript.

# Prerequisites

To run this TS Node project, you will need to have the following prerequisites installed:

- Node.js: Make sure you have Node.js installed on your machine. You can download it from the official Node.js website and follow the installation instructions for your operating system.

- TypeScript: This project is written in TypeScript, so you will need to have TypeScript installed globally on your machine. You can install it by running the following command in your terminal:

    ```
    npm install -g typescript
    ```

- Package Manager: You will also need a package manager like npm or Yarn to install the project dependencies. npm is bundled with Node.js, so you should already have it installed. If you prefer to use Yarn, you can install it by following the instructions on the Yarn website.

- Git: If you plan to clone this project from a Git repository, make sure you have Git installed on your machine. You can download it from the official Git website and follow the installation instructions for your operating system.

Once you have these prerequisites installed, you will be ready to run the TS Node project.

# Installation

To install this TS Node project, follow these steps:

1. Clone the project repository to your local machine using Git:

    ```
    git clone https://github.com/your-username/project-manager.git
    ```

2. Navigate to the project directory:

    ```
    cd project-manager
    ```

3. Install the project dependencies using npm or Yarn:

    ```
    npm install
    ```

    or

    ```
    yarn install
    ```

4. Build the TypeScript files:

    ```
    npm run build
    ```

5. Start the project:

    ```
    npm start
    ```

Now you have successfully installed and started the TS Node project.


# Roadmap

- [ ] Basic project management
	- [x] Add new project
	- [ ] Modify/update existing project(s)
	- [ ] Delete an existing project
	- [ ] List all projects
- [ ] Ease-of-use
	- [ ] Implement fuzzy-find for directory search
- [ ] Project adjacent tools
	- [ ] Open project
	- [ ] Run project
	- [ ] Project scripts(?)

# Thanks to

[TS Node](https://github.com/TypeStrong/ts-node)

![ts-node](https://github.com/TypeStrong/ts-node/raw/main/logo.svg?sanitize=true)

[Inquirer](https://github.com/SBoudrias/Inquirer.js)

![inquirer prompts](https://raw.githubusercontent.com/SBoudrias/Inquirer.js/main/assets/inquirer_readme.svg?sanitize=true)

[Color-TS](https://github.com/shaselle/colors.ts)

![color-ts](https://user-images.githubusercontent.com/23441098/32871016-87f23ba4-ca33-11e7-879f-b04e689ad289.png)

[Figlet JS](https://github.com/patorjk/figlet.js/tree/main)

```
___________.___  ________.__          __          __
\_   _____/|   |/  _____/|  |   _____/  |_       |__| ______
 |    __)  |   /   \  ___|  | _/ __ \   __\      |  |/  ___/
 |     \   |   \    \_\  \  |_\  ___/|  |        |  |\___ \
 \___  /   |___|\______  /____/\___  >__| /\ /\__|  /____  >
     \/                \/          \/     \/ \______|    \/

```