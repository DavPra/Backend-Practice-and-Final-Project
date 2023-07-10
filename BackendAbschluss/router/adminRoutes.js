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
            console.log(adminStatus);
            if (adminStatus === true) {
                async (req, res) => {
                try{
                    const orders = await db.getOrders();
                    res.json(orders);
                }

                catch (e) {
                    console.log(e);
                    res.status(500).send('Something went wrong');
                }
            }

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