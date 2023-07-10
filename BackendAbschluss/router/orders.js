const express = require('express');
const router = express.Router();
const db = require('../services/database');
const passport = require('passport');
const jwtStrategy = require('../strategies/jwtStrategy');
const jwt = require('../services/jwt');

passport.use(jwt, jwtStrategy);

router.get('/orders', async (req, res) => {
    const orders = await db.getOrders();
    res.json(orders);
}
);


router.get('/orders/:id', async (req, res) => {
    const order = await db.getOrdersbyUser(req.params.id);
    res.json(order);
}
);

module.exports = router;