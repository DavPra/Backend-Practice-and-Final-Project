const express = require('express');
const database = require('../services/database');
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const user = await database.findUserByCredetials(req.body);
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong!');
    }
});
    

module.exports = router;