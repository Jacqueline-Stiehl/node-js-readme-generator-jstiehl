// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// const questions = []; //this is the original code
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What was your motivation for this project?",
    name: "motivation",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "why",
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "solve",
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "learn",
  },
  {
    type: "input",
    message: "Enter a table of contents",
    name: "toc",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide step-by-step descriptions of how to get the development environment running.",
    name: "steps",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use. INclude screenshots as necessary.",
    name: "examples",
  },
  {
    type: "input",
    message:
      "List your collaborators with links to their GitHub profiles. List creators of third-party aseets that require attribution with links to their primary web presence. Include links to any tutorials.",
    name: "collaborators",
  },
  {
    type: "list",
    message: "Which license should be added to this project?",
    name: "license",
    choice: ["community", "MIT", "GNU GPLv3"],
  },
  {
    type: "input",
    message: "Add your badges here",
    name: "badges",
  },
  {
    type: "input",
    message: "List your project features.",
    name: "features",
  },
  {
    type: "input",
    message:
      "Include guideline here for other developers who would like to contribute to this application.",
    name: "contributions",
  },
  {
    type: "input",
    message: "Provide information on how to run tests on your application",
    namae: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
