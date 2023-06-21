const express = require('express')
const router = express.Router()
const database = require('../services/database')

router.get('/users', async (req, res) => {
    try {
        const result = await database.getUsers()
        res.json(result)
    }
    catch (e) {
        console.log(e)
        res.status(500).send('Something went wrong')
    }
})

module.exports = router