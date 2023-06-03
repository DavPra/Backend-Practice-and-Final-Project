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
  const [result] = await connection.execute('SELECT * FROM users')

  return result
}

async function getBooks() {
  const [result] = await connection.execute('SELECT * FROM books')

  return result
}

async function createUser({username, email, password}) {
    const hash = await bcrypt.hash(password, 10)
    await connection.execute('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [username, email, hash])
}

async function findBookbyID({id}) {
    const [result] = await connection.execute('SELECT * FROM books WHERE id = ? LIMIT 1', [id])
    if (!result.length) {  
    throw new Error('Book not found')
    }
    const book = result[0]

    return book
}



module.exports = {
    getUsers,
    getBooks,
    createUser,
    findBookbyID
};