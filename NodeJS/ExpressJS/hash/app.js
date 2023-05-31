const express = require('express');
const app = express();
const register = require('./router/register');

app.use(express.json());

app.use('/api', register);

app.listen(3000);