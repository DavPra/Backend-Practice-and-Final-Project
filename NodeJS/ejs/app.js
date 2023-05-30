const express = require('express');
const app = express();
const path = require("path");
const user = require('./Router/user');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/user', user);

app.listen(3000);
