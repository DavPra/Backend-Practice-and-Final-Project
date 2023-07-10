const express = require('express');
const router = express.Router();
const db = require('../services/database');
const passport = require('passport');
const jwtStrategy = require('../strategies/jwtStrategy');
const jwt = require('../services/jwt');

router.get('/orders', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {

                    const orders = await db.getOrders();
                    res.json(orders);

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