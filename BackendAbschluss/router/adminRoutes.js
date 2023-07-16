const express = require('express');
const router = express.Router();
const db = require('../services/database');
const passport = require('passport');
const jwtStrategy = require('../strategies/jwtStrategy');
const jwt = require('../services/jwt');

router.get('/orders', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            //console.log(req.user);
            const adminStatus = req.user.admin;
            //console.log(adminStatus);
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

router.get('/orders/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            //console.log(req.user);
            const adminStatus = req.user.admin;
            //console.log(adminStatus);
            if (adminStatus === true) {

                    const orders = await db.getOrderDetailsbyId(req.params.id);
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

/*router.post('/orders', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {

                    const orders = await db.addOrders(req.body);
                    res.json(orders);

            } else {
                res.json({ message: 'You are not an admin' });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);*/

router.delete('/orders/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {

                    const orders = await db.deleteOrders(req.params.id);
                    const orderedProducts = await db.deleteOrderedProducts(req.params.id);
                    res.json({message: 'Order deleted'});

            } else {
                res.json({ message: 'You are not an admin' });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.patch('/orders/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {
                console.log(req.body);

                    const orders = await db.updateOrders(req.params.id, req.body.OrderStatus);
                    res.json({message: 'Order updated'})

            } else {
                res.json({ message: 'You are not an admin' });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.get('/allProducts', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {
                db.getProducts().then((products) => {
                    res.json(products);
                });
            } else {
                res.json({ message: 'Only admins may access this route.' });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }

    }
);

router.patch('/products/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        console.log(req.body);
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {
                
                    const products = await db.updateProducts(req.params.id, req.body);
                    res.json(products);
                    console.log(products);

            } else {
                res.json({ message: 'You are not an admin' });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.post('/products', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {

                    const products = await db.addProducts(req.body);
                    res.json(products);

            } else {
                res.json({ message: 'You are not an admin' });
            }
        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.delete('/products/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {
            
                    const products = await db.deleteProducts(req.params.id);
                    res.json(products);

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