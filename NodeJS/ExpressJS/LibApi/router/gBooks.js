const express = require ('express')
const router = express.Router()
const passport = require('passport')
const database = require('../services/database')
const Authors = require('../models/authors')
const Books = require('../models/books')


/*
router.get('/orderby/:order', async (req, res) => {
    const order = await database.orderBooks(req.params.order)
   res.json(order)
  
})
*/

router.get('/', async (req, res) => {
    const books = await database.getBooks()
    res.json(books)
})

/*
router.get('/:id', async (req, res) => {
    const oneBook = await database.getBookById(req.params.id)
    res.json(oneBook)
})

router.get('/search/:searchString', async (req, res) => {
    const search = await database.searchBook(req.params.searchString)
    res.json(search)
})




*/


module.exports = router
