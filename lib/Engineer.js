// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(id, name, email, github){
        super(name, id, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
    }
    getGithub(){return github};
    getRole(){return "Engineer"};
}
module.exports = Engineer;

