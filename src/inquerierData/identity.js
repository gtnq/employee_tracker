const inquirer = require("inquirer");
const getEmployeeName = require("../inquerierData/employee");
const getEmployerName = require("../inquerierData/employer");

const employeeOremployer = [
	{
		type: "list",
		name: "role",
		message: "Is he employee or employeer",
		choices: ["employee", "employer"],
	},
];

function checkEmployeeORemployer() {
	return inquirer.prompt(employeeOremployer).then((choice) => {
		switch (choice.role) {
			case "employee":
				getEmployeeName().then(() => console.log("employee"));
			case "employer":
				getEmployerName().then(() => console.log("employer"));
		}
	});
}

module.exports = checkEmployeeORemployer;
