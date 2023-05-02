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

async function checkEmployeeORemployer() {
	return await inquirer.prompt(employeeOremployer).then((choice) => {
		switch (choice.role) {
			case "employee":
				getEmployeeName().then(() => console.log("employee"));
				break;
			case "employer":
				getEmployerName().then(() => console.log("employer"));
				break;
		}
		return Promise.resolve()
	});
	
}

module.exports = checkEmployeeORemployer;
