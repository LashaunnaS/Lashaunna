#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
import boxen from "boxen";
import chalk from "chalk";
import terminalLink from "terminal-link";

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const textColor = {
  offWhite: chalk.hex("#fefeff"),
  mintyFresh: chalk.hex("#87f1ff"),
  spaceGrey: chalk.hex("#dfe5db"),
  cyberGreen: chalk.hex("#65a542"),
};

const cardText = `${textColor.offWhite.bold("Lashaunna Samuels")}

${textColor.offWhite.bold("Work:")} ${textColor.mintyFresh(
  "Front-End Engineer (Web | Native)"
)}
${textColor.offWhite.bold("Github:")} ${textColor.mintyFresh(
  `${terminalLink("Github", "https://github.com/LashaunnaS")}`
)}
${textColor.offWhite.bold("LinkedIn:")} ${textColor.mintyFresh(
  `${terminalLink("LinkedIn", "https://www.linkedin.com/in/lashaunna-samuels")}`
)}
${textColor.offWhite.bold("NPM:")} ${textColor.mintyFresh(
  `${terminalLink("NPM", "https://www.npmjs.com/~lashaunna191")}`
)}
${textColor.offWhite.bold("Stack:")} ${textColor.mintyFresh(
  `${terminalLink(
    "Stack",
    "https://stackoverflow.com/users/10176472/LashaunnaS"
  )}`
)}

${textColor.spaceGrey.bold("Card:")} ${textColor.mintyFresh("npx lashaunna")}`;

console.log(textColor.cyberGreen(boxen(cardText, options)));
