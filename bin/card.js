#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require("boxen");
const chalk = require("chalk");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const cardText = chalk`{hex('#dfe5db') Lashaunna Samuels /} {hex('#87f1ff') @}

  {hex('#dfe5db').bold Work:} {hex('#87f1ff') Curious Web Engineer}
  {hex('#dfe5db').bold NPM:} {hex('#87f1ff') https://www.npmjs.com/~lashaunna191}
  {hex('#dfe5db').bold Stack:} {hex('#87f1ff') https://stackoverflow.com/users/10176472/LashaunnaS}
  {hex('#dfe5db').bold Github:} {hex('#87f1ff') https://github.com/LashaunnaS}
  {hex('#dfe5db').bold LinkedIn:} {hex('#87f1ff') https://www.linkedin.com/in/lashaunna-samuels/}

  {hex('#dfe5db').bold Card:} {hex('#87f1ff') npx Lashaunna}`;

console.log(chalk.hex("#50723c")(boxen(cardText, options)));
