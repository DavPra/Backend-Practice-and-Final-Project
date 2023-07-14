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

router.post('/orders', passport.authenticate('jwt', { session: false }),
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
);

router.delete('/orders/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {

                    const orders = await db.deleteOrders(req.params.id);
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

router.patch('/orders/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {

                    const orders = await db.updateOrders(req.params.id, req.body);
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
        try {
            const adminStatus = req.user.admin;
            if (adminStatus === true) {
                
                    const products = await db.updateProducts(req.params.id, req.body);
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