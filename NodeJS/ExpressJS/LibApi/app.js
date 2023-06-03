const express = require('express');
const app = express();
const passport = require('passport');
const localStrategy = require('./strategies/localstrategy');
const jwtStrategy = require('./strategies/jwtStrategy');

const register = require('./router/register');
const login = require('./router/login');
const books = require('./router/books');
const id = require('./router/bookbyid');

app.use(express.json());
app.use('/api', register);
app.use('/api', login);
app.use('/api', books);
app.use('/api/books',id);

app.listen(3000);