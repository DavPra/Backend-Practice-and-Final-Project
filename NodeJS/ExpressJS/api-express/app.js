const express = require('express');
const app = express();
const db = require('mysql');
const bodyParser = require('body-parser');

const con= db.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test_db'
});

con.connect((err) => {
    if(err) console.log('Connection to database failed.');
});

app.get('/api/user', (req, res) => {
    con.query('SELECT * FROM user', (err, rows) => {
        res.send(JSON.stringify(result))
    });  
});

app.get('/api/user/:id', (req, res) => {
    con.query(`SELECT * FROM user WHERE id =${req.params.id}`, (err, result) => {
        res.send(JSON.stringify(result[0]))
    });

});

app.post('/api/user', (req, res) => {

});

app.delete('/api/user/:id', (req, res) => {

});

app.put('/api/user/:id', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server run on http://localhost:3000');
})


