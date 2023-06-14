const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../services/database');

router.get('/products', async (req, res) => {
    const products = await db.getProducts();
    res.json(products);
}
);

router.post('/products', async (req, res) => {
    const product = await db.addProducts(req.body);
    res.json(product);
}
);

module.exports = router;