const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

let connection

mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'library'
}).then((con) => {
    console.log('Connected to database')
    connection = con
}).catch((err) => {
    console.log('Error connecting to database', err)
});

async function getUsers() {
  const [result] = await connection.execute('SELECT * FROM user')

  return result
}

module.exports = {
    getUsers
};