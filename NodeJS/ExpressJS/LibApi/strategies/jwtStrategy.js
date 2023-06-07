const jwtStrategy = require('passport-jwt').Strategy
const jwtExtractor = require('passport-jwt').ExtractJwt
const jwt = require('../services/jwt')

const options = {
    jwtFromRequest: jwtExtractor.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwt.JWT_SECRET
}

const strategy = new jwtStrategy(options, (jwt, done) => {

    const user = {username: jwt.username, id: jwt.id, email: jwt.email}
    done(null, user)
})


module.exports = strategy
