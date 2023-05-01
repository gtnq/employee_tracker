const connection = require('../../config/connection')

const getRole = async (res, req) => {
    let quote = "select r.id, r.title, r.salary, d.department_name "
    quote += "from role r left join department d on r.department_id = d.id;"
    const [result] = await connection.query(quote)
    console.table(result)
}



module.exports = getRole