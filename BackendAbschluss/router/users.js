const express = require('express')
const router = express.Router()
const database = require('../services/database')
const passport = require('passport')
const jwtStrategy = require('../strategies/jwtStrategy')

//const res = Boolean

passport.use('jwt', jwtStrategy)

//if res(req.user.admin === false) {console.log('Only admins can access this route')};


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

router.get('/guests', async (req, res) => {
    try {
        const result = await database.getguestUsers()
        res.json(result)
    }
    catch (e) {
        console.log(e)
        res.status(500).send('Something went wrong')
    }
})

router.post('/guests', async (req, res) => {
    try {
        const result = await database.addGuestUser(req.body)
        res.json(result)
    }
    catch (e) {
        console.log(e)
        res.status(500).send('Something went wrong')
    }
})


module.exports = router