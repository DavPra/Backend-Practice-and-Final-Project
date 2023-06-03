const express = require('express');
const db = require('../services/database');
const router = express.Router();

router.get('/books', async (req, res) => {
    const books = await db.getBooks()
    res.send(books)
}
);


module.exports = router;
