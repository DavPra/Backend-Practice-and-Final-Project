const express = require ('express')
const passport = require('passport')
const router = express.Router()
const database = require('../services/database')

router.use(passport.authenticate('jwt', {session: false}))


router.post('/', async (req, res) => {
    const author = await database.addAuthor(req.body)
    res.json(req.body)

})

module.exports = router
