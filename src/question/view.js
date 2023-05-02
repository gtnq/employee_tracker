const {getDepartment, getEmployee, getRole} = require('../action/getData')
const start = require('../../server')

function view (item) {
    switch (item) {
        case "department":
            getDepartment().then((result) => {
                console.table(result); 
                console.log(" ");
                start.start()
                return Promise.resolve()
            })
            console.log('getdepartment')
            break;
        case "role":
            getRole().then((result) => {
                console.table(result); 
                console.log(" ");
                start.start()
                return Promise.resolve()
            })
            console.log('getRole')
            break;
        case "employee":
            getEmployee().then((result) => {
                console.table(result); 
                console.log(" ");start.start()
                return Promise.resolve()
            })
            console.log('getEmployee')
            break;
    }
    return Promise.resolve();


}



module.exports = view