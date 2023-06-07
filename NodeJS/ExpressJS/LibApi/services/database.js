const Users = require('../models/user')
const Books = require('../models/books')
const Authors = require('../models/authors')
const bcrypt = require('bcryptjs')
const { Op } = require('sequelize')


async function createUser({password, username, email}) {
    const hash = await bcrypt.hash(password, 10)
    //await connection.execute('INSERT INTO users(username, email, password) VALUES (?,?,?)', [username,email,hash])

    const user =  await Users.create({username: username, email:email, password: hash})
    return {id: user.id, username: user.username, email: user.email}
}


async function findUserByCredentials({email, password}) {
    //const [result] = await connection.execute('SELECT * FROM users WHERE email = ? LIMIT 1', [email])
    const result = await Users.findAll({where: {email: email}})

    if (!result.length) {
        throw new Error('User not found')
    }

    const user = result[0]

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw new Error ('Password not match')
    }

    return {id: user.id, username: user.username, email: user.email}
}


async function addAuthor({name}) {
 //await connection.execute('INSERT INTO authors(name) VALUES (?)', [name])
}


async function addBooks({title, author_id}) {
    //await connection.execute('INSERT INTO books(title, author_id) VALUES (?,?)', [title, author_id])
    return Books.create({title: title, authorId: author_id})
}



async function getBooks() {
    //const [result] = await connection.execute('SELECT b.title as Book_Title, a.name as Author_Name from books b inner join authors a on (a.id = b.author_id)')
    const result = await Books.findAll({include: Authors})
    return result
    }

async function getBookById(id) {
    //const [result] = await connection.execute('SELECT b.title as Book_Title, a.name as Author_Name from books b inner join authors a on (a.id = b.author_id) where b.id = ?', [id])
return await Books.findOne({where: {id: id}})
    //return result[0]
}

async function searchBook(searchString) {
    //const [result] = await connection.execute('SELECT b.title as Book_Title, a.name as Author_Name from books b inner join authors a on (a.id = b.author_id) WHERE b.title LIKE ?', [`%${searchString}%`])
    const Books = await Books.findAll({where: {
        title: {[Op.like]: searchString
    }}
})
    //return result
}

async function orderBooks(order) {
    /*
    if (order === "title") {
        const [result] = await connection.execute(
            'SELECT b.title as Book_Title, b.id as Book_Id, a.name as Author_Name from books b inner join authors a on (a.id = b.author_id) ORDER BY b.title  desc', [order])

        return result

    }
    else {   
        const [result] = await connection.execute(
        'SELECT b.title as Book_Title, b.id as Book_Id, a.name as Author_Name from books b inner join authors a on (a.id = b.author_id) ORDER BY a.name desc', [order])

        return result
    }
    
*/
}

async function editBooks(id, {title, author_id}) {
    //const [result] = await connection.execute('UPDATE books SET title = ?, author_id = ?  WHERE id = ?', [title, author_id, id])
    const result = await Books.update({title: title, authorId: author_id}, {where: {id: id}})

    return result

}

async function editAuthor(id, {name}) {
    // const [result] = await connection.execute('UPDATE authors SET name = ? WHERE id = ?', [name, id])
    return await Authors.update({name: name}, {where: {id: id}})
    //return result
}


module.exports = {
getBooks,
createUser,
findUserByCredentials,
addAuthor,
addBooks,
getBookById,
searchBook,
orderBooks,
editBooks,
editAuthor
}

