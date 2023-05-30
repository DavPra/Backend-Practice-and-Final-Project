const express = require('express');
const app = express();
const db = require('mysql');

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


const headerMW = function(req, res, next) {
    res.set('Content-Type', 'application/json');
    next();
}

app.use(express.json());
app.use(headerMW);

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
    console.log(req.body);
    con.query(`INSERT INTO user (username, firstname, lastname, email, adress) VALUES ('${req.body.username}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.adress}')`, (err, result) => {
        res.statusCode = 201;
        res.send(JSON.stringify(req.body))
    });
});

app.delete('/api/user/:id', (req, res) => {

    con.query(`DELETE FROM user WHERE id =${parseInt(req.params.id)}`, (err, result) => {
        res.status(204).send('');
    });

});

app.put('/api/user/:id', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server run on http://localhost:3000');
})


