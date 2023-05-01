const connection = require('../../config/connection')


const getDepartment = async (res, req) => {
	let quote = "SELECT * FROM employeeTracker.department;";
	const [results] = await connection.query(quote);
	console.table(results); // changed from result to results
	console.log(' ')
	return;
};


module.exports = getDepartment;
