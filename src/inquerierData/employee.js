const inquirer = require("inquirer");
const { addPeople } = require("../action/addData");
const { getRole, getEmployer } = require("../action/getData");
let employer = [];
let role = [];

const employeeQuestion = [
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
	},
	{
		type: "list",
		name: "manager",
		message: "who is his/her manager",
		choices: employer,
	}
];

async function getEmployeeName() {

	let employerData = await getEmployer();
	employerData.map((item) => {
		employer.push(item.first_name + " " + item.last_name);
	});
	console.log(employer);


	let roleData = await getRole();
	roleData.map((item) => {
		role.push(item.title);
	});
	console.log(role);
	return inquirer.prompt(employeeQuestion)
    .then((data) => {
        data.manager = employer.indexOf(data.manager) +1
        data.roles = role.indexOf(data.roles) +1
        console.log(data)
        return addPeople(data, 'employee')
    })
}

module.exports = getEmployeeName;
