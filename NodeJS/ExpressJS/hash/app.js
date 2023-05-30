const express = require('express');
const app = express();
const register = require('./router/register');

app.use('/api', register);

app.listen(3000);