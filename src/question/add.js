const getdepartmentName = require('../getInfo/department')
const addRole = require( '../action/addRole')
const addEmployee = require('../action/addEmployee')


function add (item) {
    console.log('add')
    switch (item) {        
        case "department":
            getdepartmentName()
            console.log('getdepartment')
            break;
        case "role":
            addRole()
            console.log('getRole')
            break;
        case "employee":
            addEmployee()
            console.log('getEmployee')
            break;
    }

    
    return ;
    


}



module.exports = add