const mysql = require('mysql');
const http = require('http');
const fs = require('fs');

const con = mysql.createConnection( {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'aufgabe1db'
})

con.connect()

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile('form.html', (err, data) => {
            res.end(data)
        })
    }

    if(req.method === 'post') {
        console.log('Post')
        /**
        con.connect(function(err) {
            if(err) throw err;
            console.log('Connected!')
            con.query("insert into customers (name, adress) values ('Andreas Walter', 'Wasserweg 5')", function (err, result) {
                if (err) throw err;
                console.log('Entries into Tables added.')
            })
        })
    */
    }

    if (req.url === '/list') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        const sql = 'Select * from Personen';
        con.query(sql, (err, result) => {
            if (err) throw err;
        
        fs.readFile('list.html', (err, data) => {
            //TODO: SQL Ergebnis
            res.end(data)
        })
        })
    }
}
)


server.listen(3000)