const inquirer = require("inquirer");
let employee_arr = [];
let roles = [];
const {getEmployee, getRole} = require("../action/getData");
const update = require('../action/update')

const pickPerson = [
	{
		type: "list",
		name: "names",
		message: "who do you want to change",
		choices: employee_arr,
	},
	{
		type: "list",
		name: "roles",
		message: "which role do you want the employee to be?",
		choices: roles,
	},
];

async function pickEmployee() {
	const employee = await getEmployee();
	employee.map((item) => {
		employee_arr.push(item.employee_name);
	});

	const current = await getRole();
	current.map((item) => {
		roles.push(item.title);
	});
	return await inquirer.prompt(pickPerson).then((userData) => {
		console.log(userData);
		let target = employee.find(
			({ employee_name }) => employee_name === userData.names
		);
		userData.roles = roles.indexOf(userData.roles) + 1
        console.log(target, userData)
        return update(target, userData)
	});
}

module.exports = pickEmployee;
