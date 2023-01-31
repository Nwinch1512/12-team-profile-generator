const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// import Employee from ("./lib/Employee.js");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// array of questions for user
const questionsCore = [
  {
    type: "input",
    name: "manager-name",
    message: "Enter your team manager's name",
  },
  {
    type: "input",
    name: "manger-employee-id",
    message: "Enter your team manager's employee ID",
  },
  {
    type: "input",
    name: "manger-email",
    message: "Enter your team manager's email address",
  },
  {
    type: "input",
    name: "manger-office-number",
    message: "Enter your team manager's office number",
  },
  {
    type: "list",
    name: "job",
    message: "Please select a job title using arrow keys",
    choices: ["Engineer", "Intern", "Finish building team"],
  },
];

const questionsEngineer = [
  {
    type: "input",
    name: "enginee-name",
    message: "Enter the engineer's name",
  },
  {
    type: "input",
    name: "engineer-id",
    message: "Enter the engineer's ID",
  },
  {
    type: "input",
    name: "engineer-email",
    message: "Enter the engineer's email",
  },
  {
    type: "input",
    name: "engineer-github",
    message: "Enter the engineer's GitHub username",
  },
];

const questionsIntern = [
  {
    type: "input",
    name: "intern-name",
    message: "Enter the intern's name",
  },
  {
    type: "input",
    name: "intern-id",
    message: "Enter the intern's ID",
  },
  {
    type: "input",
    name: "intern-email",
    message: "Enter the intern's email",
  },
  {
    type: "input",
    name: "intern-school",
    message: "Enter the intern's school",
  },
];
