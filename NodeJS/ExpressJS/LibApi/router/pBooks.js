const express = require ('express')
const router = express.Router()
const passport = require('passport')
const database = require('../services/database')

router.use(passport.authenticate('jwt', {session: false}))


router.post('/books', async (req, res) => {
    const books = await database.addBooks(req.body)
    res.json(req.body)

})

router.put('/books/:id', async (req, res) => {
    const editBook = await database.editBooks(req.params.id, req.body)
    res.json(editBook)
})

router.put('/authors/:id', async (req, res) => {
    const editAuthor = await database.editAuthor(req.params.id, req.body)
    res.json(editAuthor)
})




module.exports = router
