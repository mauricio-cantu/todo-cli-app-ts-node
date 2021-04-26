#!/usr/bin/env node

import {version, homepage} from '../package.json';
import {program} from 'commander';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
program.version(version);
clear();
console.log(
  chalk.cyan.bold(figlet.textSync('TODO CLI', {horizontalLayout: 'full'}))
);
console.log(
  chalk.blueBright.bgBlack('Check this project on GitHub!', homepage)
);
