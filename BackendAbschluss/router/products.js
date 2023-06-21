const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../services/database');

router.get('/products', async (req, res) => {
    const products = await db.getProducts();
    res.json(products);
}
);

router.get('/products/:id', async (req, res) => {
    const product = await db.getProductsById(req.params.id);
    res.json(product);
}
);

router.use(passport.authenticate('jwt', { session: false }));

router.post('/products', async (req, res) => {
    const product = await db.addProducts(req.body);
    res.json(product);
}
);

router.delete('/products/:id', async (req, res) => {
    const product = await db.deleteProducts(req.params.id);
    res.json(product);
}
);

router.patch('/products/:id', async (req, res) => {
    const product = await db.updateProducts(req.params.id, req.body);
    res.json(product);
}
);


module.exports = router;