const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
  .prompt([
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
      message: "What are the steps required to install your project?",
      name: "steps",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use.",
      name: "examples",
    },
    {
      type: "input",
      message:
        "List your collaborators with links to their GitHub profiles. \nList creators of third-party assets that require attribution with links to their primary web presence. Include links to any tutorials.",
      name: "collaborators",
    },
    {
      type: "list",
      message: "Which license should be added to this project?",
      name: "license",
      choices: ["Apache-2.0", "MIT", "GNU-GPLv3", "None"],
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
      name: "contributing",
    },
    {
      type: "input",
      message: "Provide information on how to run tests on your application.",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "github",
    },
    {
      type: "input",
      message: "Enter your email for any users that have questions.",
      name: "email",
    },
  ])

  .then((responses) => {
    const finalStr = generateMarkdown(responses);
    fs.writeFile("README1.md", finalStr, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
