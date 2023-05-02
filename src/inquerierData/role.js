const inquirer = require("inquirer");
const { addRole } = require("../action/addData");
const { getDepartment } = require("../action/getData");

let department_arr = [];

const roleQuestions = [
	{
		type: "input",
		name: "roleName",
		message: "what is the role name?",
		validate: (departmentName) => {
			if (departmentName) {
				return true;
			} else {
				console.log("please input a name");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "salary",
		message: "what is the salary of that role?",
		validate: (salary) => {
			if (salary) {
				return true;
			} else {
				console.log("please input a name");
				return false;
			}
		},
	},
	{
		type: "list",
		name: "index",
		message: "which department does it belong",
		choices: department_arr,
	},
];

async function getRoleName() {
	let data = await getDepartment();
	data.map((item) => {
		department_arr.push(item.department_name);
	});
	console.log(department_arr);
	return inquirer
		.prompt(roleQuestions)
        .then((data) => {
            
            data.index = department_arr.indexOf(data.index) + 1
            console.log(data)
            return addRole(data, department_arr)})		
}
module.exports = getRoleName;
