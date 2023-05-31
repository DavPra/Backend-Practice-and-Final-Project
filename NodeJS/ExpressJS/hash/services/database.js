const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

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
  const [result] = await connection.execute('SELECT * FROM user')

  return result
}

async function createUser({name, email, username, password}) {
        const hash = await bcrypt.hash(password, 10)
        await connection.execute('INSERT INTO user (name, username, email, password) VALUES (?, ?, ?, ?)', [name, email, username, hash])
}

async function findUserByCredetials({email, password}) {
    const [result] = await connection.execute('SELECT * FROM user WHERE email = ? LIMIT 1', [email])
    if (!result.length) {
    throw new Error('User not found')
    }

    const user = result[0]

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
    throw new Error('Wrong password')
    }
    delete user.password
    return user
}

module.exports = {
    getUsers,
    createUser,
    findUserByCredetials
}