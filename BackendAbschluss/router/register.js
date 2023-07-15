const express = require('express')
const router = express.Router()
const db = require('../services/database')


router.post('/register', async (req, res) => {
    const user = await db.createUser(req.body)
    res.json(user)
})

router.post('/Gregister', async (req, res) => {
    const user = await db.createGuser(req.body)
    res.json(user)
})

module.exports = router