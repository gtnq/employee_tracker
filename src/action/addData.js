const connection = require('../../config/connection')
const start = require('../../server')



const addDepartment =  (department_name) => {
    let quote = "INSERT INTO employeetracker.department"
    quote += `(department_name) value ('${department_name}');`
    //console.log(quote)
    connection.query(quote).then(() =>start.start())
    return Promise.resolve()
}

const addRole = (data, arr) => {
    let {roleName, salary, index} = data
    
    let quote = 'INSERT INTO employeetracker.role'
    quote += `(title,salary, department_id)`
    quote += `VALUES (
    '${roleName}', ${parseFloat(salary)},${parseInt(index)});`
    //console.log(quote)
    connection.query(quote).then(() =>start.start())
    return Promise.resolve()

}

const addPeople = (data, type) => {
    let quote = `INSERT INTO employeetracker.employee`
    const {first_name, last_name, roles, manager} = data
    
    switch (type) {
        case 'employee':
            quote += `(first_name,last_name,employer_id,role_id) VALUES`
            quote += `('${first_name}', '${last_name}', 
            ${parseInt(manager)}, ${parseInt(roles)});`
            //console.log(quote)
            connection.query(quote).then(() =>start.start())
            return Promise.resolve()
        case 'employer':
            quote += `(first_name,last_name,role_id) VALUES`
            quote += `('${first_name}', '${last_name}', ${parseInt(roles)});`
            //console.log(quote)

            connection.query(quote).then(() =>start.start())
            return Promise.resolve()
    }
}

module.exports = {
    addDepartment,
    addRole,
    addPeople
}