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


async function getBooks() {
  const [result] = await connection.execute('SELECT * FROM books')

  return result
}

async function createUser({username, email, password}) {
    const hash = await bcrypt.hash(password, 10)
    await connection.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hash])
}

async function findBookbyID({id}) {
    const [result] = await connection.execute('SELECT * FROM books WHERE id = ? LIMIT 1', [id])
    if (!result.length) {  
    throw new Error('Book not found')
    }
    const book = result[0]

    return book
}

async function findUserByCredetials({email, password}) {
    const [result] = await connection.execute('SELECT * FROM users WHERE email = ? LIMIT 1', [email])
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
    getBooks,
    createUser,
    findBookbyID,
    findUserByCredetials
};