const inquirer = require('inquirer')
const addDepartment = require('../action/addDepartment')
const start = require("../../server")


const departmentQuestions = [
    {
        type:'input',
        name:'departmentName',
        message: 'what is the department name?',
        validate : departmentName => {
            if (departmentName) {
                return true
            } else {
                console.log('please input something')
                return false
            }
        }
    }
]


async function getdepartmentName() {
    return inquirer.prompt(departmentQuestions)
        .then(userdata => addDepartment(userdata.departmentName))
        
}
module.exports = getdepartmentName