const express = require('express')
const jwt = require('../services/jwt')
const passport = require ('passport')
const router = express.Router()

router.post('/login', passport.authenticate('local', {session:false}), async (req, res) => {
    try {
        const token = jwt.signUser(req.user)
        res.json({token:token, user:req.user})
        res.status(200).send('Login successful')
    } catch (e) {
        console.log(e)
        res.status(500).send('Something went wrong')


    }
    
})


module.exports = router
