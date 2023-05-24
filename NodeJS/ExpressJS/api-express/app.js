const express = require('express');
const app = express();
const db = require('mysql');

db.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test_db'
});

app.listen(3000, () => {
    console.log('Server run on http://localhost:3000');
})


