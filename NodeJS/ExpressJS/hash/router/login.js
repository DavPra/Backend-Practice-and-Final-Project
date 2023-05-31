const express = require('express');
const database = require('../services/database');
const jwt = require('../services/jwt');
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const user = await database.findUserByCredetials(req.body);
        const token = jwt.signUser(user);
        res.json({Token: token, user: user});
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong!');
    }
});
    

module.exports = router;