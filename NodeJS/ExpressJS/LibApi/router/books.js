const express = require('express');
const db = require('../services/database');
const router = express.Router();

router.get('/books', async (req, res) => {
    const books = await db.getBooks()
    res.json(books)
}
);

router.post('/books', async (req, res) => {
    const book = await db.createBook(req.body)
    res.json(book)
}
);

router.get('/books/:id', async (req, res) => {
    const book = await db.findBookbyID({id: req.params.id})
    res.json(book)
}
);


module.exports = router;
