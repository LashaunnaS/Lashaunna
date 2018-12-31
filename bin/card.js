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

const cardText = chalk`{hex('#FFEFD5') Lashaunna Samuels /} {hex('#00BFFF') @}

  {hex('#FFEFD5').bold Work:} {hex('#FFEFD5') Curious Web Engineer}
  {hex('#FFEFD5').bold NPM:} {hex('#00BFFF') https://www.npmjs.com/~lashaunna191}
  {hex('#FFEFD5').bold Stack:} {hex('#00BFFF') https://stackoverflow.com/users/10176472/lashaunnas}
  {hex('#FFEFD5').bold Github:} {hex('#00BFFF') https://github.com/LashaunnaS}
  {hex('#FFEFD5').bold LinkedIn:} {hex('#00BFFF') https://www.linkedin.com/in/lashaunna-samuels/}

  {hex('#FFEFD5').bold Card:} {hex('#FFEFD5') npx Lashaunna}`;

console.log(chalk.hex("#db7093")(boxen(cardText, options)));
