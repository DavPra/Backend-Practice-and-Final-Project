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

router.get('/userOrders/details', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const id = req.params.id;
            const orderDetails = await database.orderProductsDetails(id);
            res.json(orderDetails);

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
    
    const userID = req.user.id;
    const jsonInput = '[{"productId": 1, "quantity": 2}, {"productId": 2, "quantity": 3}]'

        try {

            let orderProducts = JSON.parse(jsonInput);
            let lagerstand = database.checkAvailability(orderProducts.id);

            for (let i = 0; i < orderProducts.length; i++){

                if (lagerstand >= orderProducts.quantity) {

                    const orders = await database.orderProduct(orderProducts);

                    for (let i = 0; i < orderProducts.length; i++) {
                        const product = orderProducts[i];
                        const lagerstand = database.checkAvailability(product.id);
                        const newLagerstand = lagerstand - product.quantity;
                        database.updateLagerstand(product.id, newLagerstand);
                    }
                    const orderDetails = await database.orderProductsDetails(orderProducts);
                    res.json(orders);
                return true;
                } else {
                   res.json({ message: 'Not enough products in stock' });
                return false;
                }
            }
        } catch (e) {
            console.error(e);
            res.status(500).send('Something went wrong');
    }
}
);


try {
  const orderProducts = JSON.parse(jsonInput);
  checkProductStock(orderProducts);
} catch (error) {
  console.error('Error parsing JSON input:', error);
}









router.post('/guestOrder', async (req, res) => {
    try {
        const guestOrder = await database.createGuser(req.body);
        const orders = await database.orderProduct(req.body);
        res.json(guestOrder + orders);


    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}
);



module.exports = router