const express = require('express');
const database = require('../services/database');
const jwt = require('../services/jwt');
const passport = require('passport');
const router = express.Router();

router.post('/login', passport.authenticate('local', {session: false}), async (req, res) => {
    try {
        const token = jwt.signUser(req.user);
        res.json({Token: token, user: req.user});
    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong!');
    }
});
    

module.exports = router;