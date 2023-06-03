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
  const [result] = await connection.execute('SELECT * FROM books inner join authors on books.author_id = authors.id')

  return result
}

async function createBook({title, author_id}) {
    const [result] = await connection.execute('INSERT INTO books (title, author_id) VALUES (?, ?)', [title, author_id])
    return console.log("Book created")
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

async function bookSearch({searchString}) {

    const [result] = await connection.execute('SELECT * FROM books WHERE title LIKE ?',[`%${searchString}%`] )
    if (!result.length) {
    throw new Error('Book not found')
    }
    const book = result[0]

    return book
}

async function bookOrder({order}) {
    
    if (order === 'title') {

    const [result] = await connection.execute('SELECT * From books inner join authors on books.author_id = authors.id order by title')
    if (!result.length) {
    throw new Error('Book not found')
    }
    const book = result

    return book
} else if (order === 'author') {

    const result = await connection.execute('SELECT * FROM books inner join authors on books.author_id = authors.id order by authors.name')
    if (!result.length) {
    throw new Error('Book not found')
    }
    const book = result

    return book
} else {
    console.log("Wrong order type")
}

}

async function editBooks({title, author_id, id}) {
    const [result] = await connection.execute('UPDATE books SET title = ?, author_id = ? WHERE id = ?', [title, author_id, id])
    return console.log("Book edited")
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

async function createAuthor({name}) {
    const [result] = await connection.execute('INSERT INTO authors (name) VALUES (?)', [name])
    return console.log("Author created")
}

async function getAuthors() {
    const [result] = await connection.execute('SELECT * FROM authors')
    return result
}

module.exports = {
    getBooks,
    createUser,
    findBookbyID,
    findUserByCredetials,
    createAuthor,
    getAuthors,
    createBook,
    bookSearch,
    bookOrder
};