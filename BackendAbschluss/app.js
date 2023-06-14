const express = require('express');
const app = express();

const register = require('./router/register');
const login = require('./router/login');
const products = require('./router/products');

app.use(express.json());

app.use(register);
app.use(login);
app.use(products);


app.listen(3000, () => {
    console.log('Server started');
}
);

