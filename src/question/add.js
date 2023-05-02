const getdepartmentName = require("../inquerierData/department");
const getRoleName = require("../inquerierData/role");
const checkEmployeeORemployer = require("../inquerierData/identity");

function add(item) {
	console.log("add");
	switch (item) {
		case "department":
			getdepartmentName()
				.then(() => console.log("getdepartment"))
				

			break;
		case "role":
			getRoleName()
				.then(() => console.log("addRole"))
				
			break;
		case "person":
			checkEmployeeORemployer()
				.then(() => console.log("addEmployee"))
				
			break;
	}

	return Promise.resolve();
}

module.exports = add;
