const view = require('./view')
const add = require('./add')
const pickEmployee = require('../inquerierData/getInfo')

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
            add("department")
            break;
            
        case "add a role":
            add("role")
            break;
            
        case "add an person":
            add("person")
            break;
            
        case "update an employee role":
            pickEmployee()
            break
            
        default:
            
    }
    return Promise.resolve()
}





module.exports = actions
