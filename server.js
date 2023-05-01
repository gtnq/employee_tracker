const inquirer = require("inquirer");
const actions = require("./src/question/index");


const init = [
	{
		type: "list",
		name: "index",
		message: "what do you want?",
		choices: [
			"view all departments",
			"view all roles",
			"view all employees",
			"add a department",
			"add a role",
			"add an employee",
			"update an employee role",
			"Quit",
		],
	},
];

function start() {
    return inquirer.prompt(init).then((userData) => {
        if (userData.index === "Quit") {
			console.log("finished")
			process.exit()
            
        } else {
            return actions(userData.index).then(start);
			
        }
    });
}


start()
module.exports = start;
console.log('ehh')