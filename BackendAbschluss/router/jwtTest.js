const express = require('express');
const jwt = require('../services/jwt');
const passport = require('passport');
const router = express.Router();

app.post('/jwtTest', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    }
);




module.exports = router;