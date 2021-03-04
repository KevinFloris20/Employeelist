// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee{
    constructor(id, name, email, roomNumber){
        super(name, id, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.roomNumber = roomNumber;
    }
    getRole(){return "Manager"};
}
module.exports = Manager;