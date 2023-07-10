const express = require('express');
const jwt = require('../services/jwt');
const passport = require('passport');
const router = express.Router();

router.post('/jwtTest', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const userID = req.user.admin;
            if (userID === true) {
                res.json({ message: 'You are an admin' });
            } else {
                res.json({ message: 'You are not an admin' });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);




module.exports = router;