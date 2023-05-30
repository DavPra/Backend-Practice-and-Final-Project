const express = require('express');
const router = express.Router();

const db = require('mysql');

const con= db.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'testdb'
});

con.connect((err) => {
    if(err) console.log('Connection to database failed.'), console.log(err);
});


const headerMW = function(req, res, next) {
    res.set('Content-Type', 'application/json');
    next();
}

router.use(express.json());
router.use(headerMW);

router.get('/api/user', (req, res) => {
    con.query('SELECT * FROM user', (err, result) => {
        res.send(JSON.stringify(result))
    });  
});

router.get('/api/user/:id', (req, res) => {
    con.query(`SELECT * FROM user WHERE id =${req.params.id}`, (err, result) => {
        res.send(JSON.stringify(result[0]))
    });

});

router.post('/api/user', (req, res) => {
    console.log(req.body);
    con.query(`INSERT INTO user (username, firstname, lastname, email, adress) 
    VALUES ('${req.body.username}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.adress}')`, (err, result) => {
        res.statusCode = 201;
        res.send(JSON.stringify(req.body))
    });
});

router.delete('/api/user/:id', (req, res) => {

    con.query(`DELETE FROM user WHERE id =${parseInt(req.params.id)}`, (err, result) => {
        res.status(204).send('');
    });

});

router.put('/api/user/:id', (req, res) => {

    con.query(`UPDATE user SET 
    username = '${req.body.username}', 
    firstname = '${req.body.firstname}', 
    lastname = '${req.body.lastname}', 
    email = '${req.body.email}',
    adress = '${req.body.adress}' 
    WHERE id = ${parseInt(req.params.id)}`, (err, result) => {
        res.status(200).send(JSON.stringify(req.body));
    });
});

module.exports = router;
