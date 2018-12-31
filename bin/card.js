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

const cardText = chalk`{hex('#bffff1') Lashaunna Samuels /} {hex('#87f1ff') @}

  {hex('#bffff1').bold Work:} {hex('#87f1ff') Curious Web Engineer}
  {hex('#bffff1').bold NPM:} {hex('#87f1ff') https://www.npmjs.com/~lashaunna191}
  {hex('#bffff1').bold Stack:} {hex('#87f1ff') https://stackoverflow.com/users/10176472/LashaunnaS}
  {hex('#bffff1').bold Github:} {hex('#87f1ff') https://github.com/LashaunnaS}
  {hex('#bffff1').bold LinkedIn:} {hex('#87f1ff') https://www.linkedin.com/in/lashaunna-samuels/}

  {hex('#bffff1').bold Card:} {hex('#bffff1') npx Lashaunna}`;

console.log(chalk.hex("#50723c")(boxen(cardText, options)));
