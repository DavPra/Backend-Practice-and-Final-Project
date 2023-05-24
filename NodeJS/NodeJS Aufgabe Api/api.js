const http = require('http');
const db = require('mysql');
const url = require('url');

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
    res.setHeader('Content-Type', 'application/json');
    let urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if(req.method === 'GET' && urlParsed.pathname === '/api/user') {

        if (urlParsed.query.id === undefined) {
            con.query('SELECT * FROM user', [urlParsed.query.id], (err, result) => {
                if (err) throw err;
                res.end(JSON.stringify(result));
            });
        } else {
            con.query('SELECT * FROM user WHERE id = ?', [urlParsed.query.id], (err, result) => {
                if (err) throw err;
                res.end(JSON.stringify(result[0]));
            });
        } if (req.method === 'POST' && urlParsed.pathname === '/api/user') {
            let body = '';
            req.on('data', () => {
                body += data;
            });
            req.on('end', () => {
                let json = JSON.parse(body);
                
                const sql = 'INSERT INTO user (username, firstname, lastname, email, adress) VALUES ("${json.username}", "${json.firstname}", "${json.lastname}", "${json.email}", "${json.adress}")';
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    res.statusCode = 201;
                    res.end(body);
                });
            });
        }
}});