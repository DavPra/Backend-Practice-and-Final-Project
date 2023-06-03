const express = require('express');
const app = express();
const passport = require('passport');
const localStrategy = require('./strategies/localstrategy');
const jwtStrategy = require('./strategies/jwtStrategy');

const register = require('./router/register');
const login = require('./router/login');
const books = require('./router/books');
const id = require('./router/books');
const authors = require('./router/authors');
const search = require('./router/books');
const order = require('./router/books');


app.use(express.json());
app.use(passport.initialize());

passport.use('local', localStrategy);
passport.use('jwt', jwtStrategy);

app.use('/api', register);
app.use('/api', login);
app.use('/api', books);
app.use('/api/books', id);
app.use('/api', authors);
app.use('/api/books/search', search);
app.use('/api/books/order', order);

app.listen(3000);
console.log('http://localhost:3000/api/books');