const express = require('express');
const app = express();
const register = require('./router/register');
const login = require('./router/login');
const passport = require('passport');


app.use(express.json());
app.use(passport.initialize());

app.use('/api', register);
app.use('/api', login);

app.listen(3000);
console.log('http://localhost:3000/api/register');
console.log('http://localhost:3000/api/login');