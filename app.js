const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let newHire;
const currentPath = process.cwd();
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
let team = [];

//first inquire
inquirer
    .prompt([
        {
            type: "confirm",
            name: "gg",
            message: "Hello! Please fill out the questions regarding the new hire",
            
        }])
        .then(answers => { 
            if(answers.gg == true){
                inquire();
            }
        });

function inquire(){
    inquirer
    .prompt([
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
            type: "rawList",
            name: "check",
            message: "Is your new hire a: (1. Manager, 2. Engineer, 3. Intern): ",
            choices: ["Manager", "Engineer", "Intern"]
        }
        
      ])
      .then(answers =>{
          if(answers.check == 1){
              b(answers.id, answers.name, answers.email);
          }
          if(answers.check == 2){
              c(answers.id, answers.name, answers.email);
          }
          if(answers.check == 3){
              d(answers.id, answers.name, answers.email);
          }       
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
          newHire = new Manager(id, name, email, answers.room);
          team.push(newHire);
          next();
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
          newHire = new Engineer(id, name, email, answers.git);
          team.push(newHire);
          next();
      });
  }
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
        newHire = new Intern(id, name, email, answers.school);
        team.push(newHire);
        next();
    });
}
//ask for others
function next(){
    inquirer
    .prompt([
        {
            type: "confirm",
            name: "lol",
            message: "All done :). Do you want to make another employee?",
        }])
        .then(answers => { 
            if(answers.lol == true){
                inquire();
            }
            if(answers.lol == false){
                push(team);
            }
        });
}


//render the array
function push(inputArray){
    console.log(inputArray);
    console.log(render(inputArray));
    fs.writeFileSync(currentPath +'/result/index.html', "");
    fs.appendFileSync(currentPath +'/result/index.html', render(inputArray));
}
