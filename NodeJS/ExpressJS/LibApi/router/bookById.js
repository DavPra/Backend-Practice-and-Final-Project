const express = require('express');
const db = require('../services/database');
const router = express.Router();


router.get('/books/:id', async (req, res) => {
    const book = await db.findBookbyID({id: req.params.id})
    res.send(book)
}
);

module.exports = router;