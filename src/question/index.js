const view = require('./view')
const add = require('./add')
const updateEmployee = require('../action/update')
const start = require("../../server")

function actions (action) {
    switch(action) {
        case "view all departments":
            console.log('test')
            resolve(view("department"));
            
            break;

        case "view all roles":
            resolve(view("role"));
            break;
            
        case "view all employees":
            console.log('test')
            resolve(view("employee"));
            break;
            
        case "add a department":
            resolve(add("department"))
            break;
            
        case "add a role":
            resolve(add("role"))
            break;
            
        case "add an employee":
            resolve(add("employee"))
            break;
            
        case "update an employee role":
            resolve(updateEmployee())
            break
            
        default:
            resolve()
    }
    return;
}   





module.exports = actions
