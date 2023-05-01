const connection = require('../../config/connection')
const getdepartmentName = require('../getInfo/department')

const addDepartment =  (department_name) => {
    let quote = "INSERT INTO employeetracker.department"
    quote += `(department_name) value ('${department_name}');`
    console.log(quote)
    return;
}

module.exports = addDepartment