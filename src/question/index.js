const view = require('./view')
const add = require('./add')
const updateEmployee = require('../action/update')
const start = require("../../server")

function actions (action) {
    switch(action) {
        case "view all departments":
            console.log('test')
            view("department");
            break;

        case "view all roles":
            view("role");
            break;
            
        case "view all employees":
            console.log('test')
            view("employee");
            break;
            
        case "add a department":
            add("department");
            break;
            
        case "add a role":
            add("role");
            break;
            
        case "add an employee":
            add("employee");
            break;
            
        case "update an employee role":
            updateEmployee()
            break
            
        default:
            start()
            
    }
    return;
}   





module.exports = actions
