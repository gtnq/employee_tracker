const connection = require("../../config/connection");

const getDepartment = async () => {
	let quote = "SELECT * FROM employeeTracker.department;";
	return await connection.query(quote).then((results) => {
		//console.table(results[0]);
		// console.log(" ");
		//start.start();
		return Promise.resolve(results[0]);
	});
};

const getEmployee = async () => {
	let quote =
		"select e.id, CONCAT(e.first_name,' ', e.last_name) AS employee_name, ";
	quote += "CONCAT(e2.first_name  ,' ' , e2.last_name) AS employer_name,";
	quote += "r.title AS employee_title, r.salary AS employee_salary, ";
	quote += "d.department_name ";
	quote += "from employee e ";
	quote += "left join employee e2 ";
	quote += "on e.employer_id = e2.id ";
	quote += "left join role r ";
	quote += "on e.role_id = r.id ";
	quote += "left join department d ";
	quote += "on r.department_id = d.id ";
	quote += "order by d.id, r.salary DESC;";

	return await connection.query(quote).then((results) => {
		return Promise.resolve(results[0]);
	});
};

const getRole = async () => {
	let quote = "select r.id, r.title, r.salary, d.department_name ";
	quote += "from role r left join department d on r.department_id = d.id;";

	return await connection.query(quote).then((results) => {
		return Promise.resolve(results[0]);
	});
};

const getEmployer = async () => {
	let quote = `select * from employee where employer_id IS null ;`;
	return await connection.query(quote).then((results) => {
		return Promise.resolve(results[0]);
	});
};

module.exports = {
	getDepartment,
	getEmployee,
	getRole,
	getEmployer,
};
