const express = require('express');
const router = express.Router();
const database = require('../services/database');

router.post('/register', (req, res) => {
    res.send('Folgt Morgen!');
});

module.exports = router;