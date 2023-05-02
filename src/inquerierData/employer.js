const inquirer = require('inquirer')
const {addPeople} = require('../action/addData')
const {getRole} = require('../action/getData')
let role = [];


const employerQuestion = [
    {
		type: "input",
		name: "first_name",
		message: "what is the employee's first name?",
		validate: (first_name) => {
			if (first_name) {
				return true;
			} else {
				console.log("please input a name");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "last_name",
		message: "what is the employee's last name?",
		validate: (last_name) => {
			if (last_name) {
				return true;
			} else {
				console.log("please input a name");
				return false;
			}
		},
	},
	{
		type: "list",
		name: "roles",
		message: "which role does he/she long",
		choices: role,
	}
];



async function getEmployerName() {
    let roleData = await getRole();
	roleData.map((item) => {
		role.push(item.title);
	});
    return await inquirer.prompt(employerQuestion)
    .then((data) => {
        data.roles = role.indexOf(data.roles) +1
        //console.log(data)
        return addPeople(data, 'employer')})
}

module.exports = getEmployerName