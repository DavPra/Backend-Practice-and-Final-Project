const mysql = require('mysql');
const http = require('http');
const fs = require('fs');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'aufgabe1db'
})

con.connect((err) => {
    if (err) console.log('Connection to database failed')
})

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        con.query('SELECT *from Personen', (err, result) => {
            for (let r of result) {
                console.log(r.firstname)
            }
        })

        res.end('Root Path')
    }
})