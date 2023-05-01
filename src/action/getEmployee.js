const connection = require('../../config/connection')

const getEmployee = async (res, req) => {
    let quote = "select e.id, e.first_name, e.last_name, "
    quote += "e2.first_name AS employer_fistname, e2.last_name AS employer_lastname,"
    quote +="r.title AS employee_title, r.salary AS employee_salary, "
    quote +="d.department_name"
    quote +="from employee e "
    quote +="left join employee e2 "
    quote +='on e.employer_id = e2.id'
    quote +='left join role r'
    quote +='on e.role_id = r.id'
    quote +='left join department d'
    quote +='on r.department_id = d.id'
    quote +='order by d.id, r.salary DESC'
    const [result] = await connection.query(quote)
    console.table(result)
}




module.exports = getEmployee

