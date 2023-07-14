const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../services/database');

router.get('/products', async (req, res) => {
    const products = await db.getAvailableProducts();
    res.json(products);
}
);

router.get('/products/:id', async (req, res) => {
    const product = await db.getProductsById(req.params.id);
    res.json(product);
}
);



module.exports = router;