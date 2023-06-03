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

router.get('/books/search/:searchString', async (req, res) => {
    const book = await db.bookSearch({searchString: req.params.searchString})
    res.json(book)
}
);

router.get('/books/order/:order', async (req, res) => {
    const book = await db.bookOrder({order: req.params.order})
    res.json(book)
}
);


module.exports = router;
