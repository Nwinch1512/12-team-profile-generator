const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const util = require("util");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const Employee = require("./lib/Employee.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const createFileAsync = util.promisify(fs.writeFile);

let team = [];

// array of questions for user
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
// Set up inquirer to prompt user for questions to collect info on employees in software engineering team

// Take response data and create an instance of each class to create an object for each employee
//let employee = new Employee(name,id,email);

// Create a team object and push each employee onto team object
//const team = {};

function init() {
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

init();

function addEmployee() {
  inquirer
    .prompt([
      ...[
        {
          type: "list",
          name: "teamMember",
          message: "Please add a team member (using arrow keys)",
          choices: ["Engineer", "Intern", "Finish building team"],
        },
      ],
    ])
    .then((data) => {
      if (data.teamMember === "Engineer") {
        addEngineer();
      } else if (data.teamMember === "Intern") {
        addIntern();
      } else if (data.teamMember === "Finish building team") {
        //done
        let teamHtml = render(team);
        createFileAsync("team.html", teamHtml);
      }
    });
}

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
