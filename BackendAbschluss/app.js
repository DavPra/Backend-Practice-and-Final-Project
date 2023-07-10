const express = require('express');
const app = express();

const register = require('./router/register');
const login = require('./router/login');
const products = require('./router/products');
const users = require('./router/users');
const orders = require('./router/orders');
const jwtTest = require('./router/jwtTest');

const passport = require('passport')
const localStrategy = require('./strategies/localstrategy')
const jwtStrategy = require('./strategies/jwtStrategy')


app.use(express.json())
app.use(passport.initialize())

passport.use('local', localStrategy)
passport.use('jwt', jwtStrategy)

app.use(register);
app.use(login);
app.use(products);
app.use(users);
app.use(orders);
app.use(jwtTest);


app.listen(3000, () => {
    console.log('Server started');
}
);

