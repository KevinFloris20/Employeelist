const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let newHire;

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

//first inquire
inquirer
  .prompt([
      {
          type: "confirm",
          name: "confirm1",
          message: "Hello! Please fill out the questions regarding the new hire:"
      },
      {
          type: "input",
          name: "name",
          message: "What is the new hires name?:"
      },
      {
        type: "input",
        name: "email",
        message: "What is the new hires email?:"
      },
      {
        type: "input",
        name: "id",
        message: "What is the new hires id?:"
      },
      {
          type: "checkbox",
          name: "check",
          message: "Is your new hire a?:",
          choices: ["Employee", "Engineer", "Intern", "Manager"]
      }
      
    ])
    .then(answers =>{

    });

//manager inquire
function b(id, name, email){
    inquirer.prompt([
        {
            type: "input",
            name: "room",
            message: "What is the new Managers Room number?:"
        }
    ]).then(answers =>{
        newHire = new Manager(id, name, email, answers.room)
    });
}

//engineer inqire
function c(id, name, email){
    inquirer.prompt([
        {
            type: "input",
            name: "git",
            message: "What is the new Engineers gitHub?:"
        },
    ]).then(answers =>{
        newHire = new Engineer(id, name, email, answers.git)
    });
}

//intern inquire
function d(id, name, email){
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What is the new Interns school name?:"
        },
    ]).then(answers =>{
        newHire = new Intern(id, name, email, answers.school)
    });
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
