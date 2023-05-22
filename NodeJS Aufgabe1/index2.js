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
    if (err) console.log('Connection to database failed.')
})

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'} )

    if (req.url === '/') {
        con.query('SELECT * from Personen', (err, result) => {

            res.write('<table><thead><tr><td>Vorname</td><td>Nachname</td><td>Geburtsjahr</td></tr></thead><tbody>')

            for (let r of result) {

                res.write('<tr><td>' + r.firstName + '</td><td>' + r.lastName + '</td><td>' + r.birthyear + '</td></tr>')
            }

                res.write('</tbody></table>')
                res.end()
            })
        } else if (req.url === '/form') {
            fs.readFile('form.html', (err, data) => {
                res.end(data)
            })
        } else {
            res.end('Invalid Request!')
        }

    }
)

server.listen(3000, 'localhost', () => {

    console.log ('Server runs on http://localhost:3000/')

})