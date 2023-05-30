const express = require('express');
const router = express.Router();
const db = require('mysql');

const con = db.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'testdb'
});

con.connect();

router.get('/', (req, res) => {
    con.query(`SELECT * FROM user`, (err, result) => {
        res.render('user', {title: 'Ich bin ein Title', users: result});
    });  
});

module.exports = router;