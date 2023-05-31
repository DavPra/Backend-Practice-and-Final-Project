const mysql = require('mysql2/promise');

let connection

mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'auth_db'
}).then((con) => {
    console.log('Connected to database')
    connection = con
}).catch((err) => {
    console.log('Error connecting to database', err)
});

async function getUsers() {
  const [result] = await connection.execute('SELECT * FROM users')

  return result
}

module.exports = {
    getUsers
}