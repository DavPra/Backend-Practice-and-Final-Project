const express = require('express');
const router = express.Router();
const db = require('../services/database');
const passport = require('passport');

passport.use('jwt', jwtStrategy);


router.get('/orders/:id', async (req, res) => {
    const order = await db.getOrdersbyUser(req.params.id);
    res.json(order);
}
);

