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
			"add an person",
			"update an employee role",
			"Quit",
		],
	},
];

function start() {
    return inquirer.prompt(init).then((userData) => {
		
        if (userData.index === 'Quit') {
			console.log('finish')
			process.exit()
		} else {
			actions(userData.index)
		}
    });
}

start()

exports.start = start


// async function status() {
// 	let menu;
// 	do {
// 		menu = await start();
// 		await actions(menu)
// 	} while (menu !== 'Quit');
// 	if (menu === 'quit'){
// 		process.kill()
// 	}
// }
// status()
