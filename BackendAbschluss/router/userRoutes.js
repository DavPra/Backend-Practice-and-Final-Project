const express = require('express')
const router = express.Router()
const database = require('../services/database')
const passport = require('passport')
const jwtStrategy = require('../strategies/jwtStrategy')
const jwt = require('../services/jwt')

router.get('/userOrders', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            console.log(req.user.id)
            const id = req.user.id;
            const orders = await database.getOrdersbyUser(id);
            res.json(orders);

        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.post('/userOrders', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const id = req.user.id;
            const orders = await database.orderProduct(id);
            res.json(orders);


        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.post('/order', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const id = req.user.id;
            const orders = await database.orderProduct(id);
            const orderProducts = await database.orderProducts(id);
            res.json(orders + orderProducts);


        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.post('/guestOrder', async (req, res) => {
    try {
        const orders = await database.orderGuestProduct(req.body);
        res.json(orders);


    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}
);



module.exports = router