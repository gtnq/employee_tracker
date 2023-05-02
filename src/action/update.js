const connection = require('../../config/connection')
const start = require('../../server')


function update(person, role) {
    const {id} = person
    const {roles} = role
    let quote = `UPDATE employeetracker.employee SET `
    quote += `role_id = ${parseInt(roles)} `
    quote += `WHERE id = ${id}`
    //console.log(quote)
    connection.query(quote).then(() => start.start())
    return Promise.resolve()
}




module.exports = update