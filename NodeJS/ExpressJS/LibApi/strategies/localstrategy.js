const localStrategy = require('passport-local').Strategy
const database = require('../services/database')

const options = {usernameField: 'email'}
const strategy = new localStrategy(options, async(email, password, done) => {
    try {
        const user = await database.findUserByCredentials({email, password})
        done(null, user) 
    } catch (e) {
        done(e)

    }
}) 

module.exports = strategy
