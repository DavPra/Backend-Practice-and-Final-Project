const express = require('express');
const passport = require('passport');
const database = require('../services/database');
const router = express.Router();

router.use(passport.authenticate('jwt', {session: false}));

router.get('/user', async (req, res) => {
    const users = await database.getUsers();
    res.json(users);
})

module.exports = router;