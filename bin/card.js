#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require("boxen");
const chalk = require("chalk");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  // backgroundColor: '#e7fafa',
  borderStyle: "round",
};

const cardText = chalk`{hex('#fefeff').bold Lashaunna Samuels }

  {hex('#fefeff').bold Work:} {hex('#87f1ff') Curious Web Engineer}
  {hex('#fefeff').bold NPM:} {hex('#87f1ff') https://www.npmjs.com/~lashaunna191}
  {hex('#fefeff').bold Stack:} {hex('#87f1ff') https://stackoverflow.com/users/10176472/LashaunnaS}
  {hex('#fefeff').bold Github:} {hex('#87f1ff') https://github.com/LashaunnaS}
  {hex('#fefeff').bold LinkedIn:} {hex('#87f1ff') https://www.linkedin.com/in/lashaunna-samuels/}

  {hex('#dfe5db').bold Card:} {hex('#87f1ff') npx lashaunna}`;

console.log(chalk.hex("#65a542")(boxen(cardText, options)));
