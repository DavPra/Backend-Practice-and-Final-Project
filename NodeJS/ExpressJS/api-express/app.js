const express = require('express');
const app = express();
const user = require('./routes/user');

app.use('/api/user', user);


app.listen(3000, () => {
    console.log('Server run on http://localhost:3000');
})

