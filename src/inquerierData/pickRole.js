const inquirer = require("inquirer");
const { getRole } = require("../action/getData");
let roles = []


const roleQuestion = [
	{
		type: "list",
		name: "names",
		message: "which role do you want the employee to be?",
		choices: roles,
	},
];



async function pickRole() {
    const current = await getRole()
    current.map(item => {
        roles.push(item.title)
    })
    return inquirer
		.prompt(roleQuestion)
        .then((data) => {
            
            data.index = department_arr.indexOf(data.index) + 1})

}

module.exports = pickRole