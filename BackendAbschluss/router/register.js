const express = require('express')
const router = express.Router()
const database = require('../services/database')


router.post('/register', async (req, res) => {
    const user = await database.createUser(req.body)
    res.json(user)
})

module.exports = router