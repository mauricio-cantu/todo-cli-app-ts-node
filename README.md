# TODO CLI App
The idea of this app is to enable the management of your tasks (TODOs) without leaving the terminal. This is an experimental project to learn more about building CLI applications with Node and TypeScript.

## Setup to run the app
In project root folder:
- install dependencies with `npm i`
- run `npm link` to symlink the project and its binaries to a global scope
- now you can run both the commands `todo` and `td` to execute the app from any directory 
- by running it, you should see a beautiful sign with the app's name
- that's what the app does for now :)

## Setup to develop
- install dependencies with `npm i`
- run `npm run watch` to enter watch mode
  - code some stuff, it will automatically compile the files when saving   
- `npm run compile` to compile *.ts files to *.js (it compiles to `build/` folder)
- `npm run lint` to display lint problems
- `npm run fix` to fix all lint auto-fixable problems
- `npm refresh` will erase your node_modules and package-lock.json and then make a fresh install of the dependencies
