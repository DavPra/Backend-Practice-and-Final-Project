const mysql = require('mysql');
const http = require('http');

const con = mysql.createConnection( {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'test_db1'
})

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


/**
    con.connect(function(err) {
        if(err) throw err;
        console.log('Connected!')
        con.query("select * from customers", function (err, result) {
            if (err) throw err;
            console.log('Selection successfull.', result)
        })
    })
*/

con.connect()

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    con.query("select * from customers", function (err, result) {
        if (err) throw err;
        for (let r of result) {
            res.write('Name: ' + r.name)
            res.write('<br>')
            res.write('Address: ' + r.adress)
            res.write('<hr>')
        }
        res.end()
        console.log('Selection successfull.', result)
})
})

server.listen(3000, () => {
    console.log('http://localhost:3000')
})