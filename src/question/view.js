const getRole = require('../action/getRole')
const getEmployee = require('../action/getEmployee')
const getDepartment = require('../action/getDepartment')
// const table = require('console.table')

function view (item) {
    switch (item) {
        case "department":
            getDepartment()
            console.log('getdepartment')
            break;
        case "role":
            getRole()
            console.log('getRole')
            break;
        case "employee":
            getEmployee()
            console.log('getEmployee')
            break;
    }
    return ;


}



module.exports = view