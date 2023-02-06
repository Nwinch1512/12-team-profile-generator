// Importing modules
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Setting up empty array to push team member objects to later
let team = [];

// Array of questions for manager
const questionsManager = [
  {
    type: "input",
    name: "managerName",
    message: "Enter your team manager's name",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter your team manager's employee ID",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter your team manager's email address",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "Enter your team manager's office number",
  },
];

const questionsEngineer = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter the engineer's name",
  },
  {
    type: "input",
    name: "engineerId",
    message: "Enter the engineer's ID",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter the engineer's email",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Enter the engineer's GitHub username",
  },
];

const questionsIntern = [
  {
    type: "input",
    name: "internName",
    message: "Enter the intern's name",
  },
  {
    type: "input",
    name: "internId",
    message: "Enter the intern's ID",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter the intern's email",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the intern's school",
  },
];
//Function which uses inquirer to collect manager details, create an instance of the Manager class to store the response in, and push response object to team array

function addManager() {
  inquirer
    .prompt([...questionsManager])
    .then((data) => {
      const manager = new Manager(
        data.managerName,
        data.managerId,
        data.managerEmail,
        data.managerOfficeNumber
      );

      team.push(manager);

      addEmployee();
    })
    .catch((err) => console.error(err));
}

addManager();

// Function to add extra team members

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Please add a team member (using arrow keys)",
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ])
    .then((data) => {
      if (data.teamMember === "Engineer") {
        addEngineer();
      } else if (data.teamMember === "Intern") {
        addIntern();
      } else if (data.teamMember === "Finish building team") {
        buildTeam();
      }
    });
}

function buildTeam() {
  // Create output directory if path doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

// Function to capture Engineer details to create instance of Engineer from class
function addEngineer() {
  inquirer.prompt([...questionsEngineer]).then((engineerData) => {
    const engineer = new Engineer(
      engineerData.engineerName,
      engineerData.engineerId,
      engineerData.engineerEmail,
      engineerData.engineerGithub
    );
    team.push(engineer);
    addEmployee();
  });
}

// Function to capture Intern details to create instance of Intern from class
function addIntern() {
  inquirer.prompt([...questionsIntern]).then((internData) => {
    const intern = new Intern(
      internData.internName,
      internData.internId,
      internData.internEmail,
      internData.internSchool
    );
    team.push(intern);
    addEmployee();
  });
}
