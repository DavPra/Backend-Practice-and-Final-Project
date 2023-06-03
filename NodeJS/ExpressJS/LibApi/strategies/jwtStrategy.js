const JwtStrategy = require('passport-jwt').Strategy;
const JwtExtractor = require('passport-jwt').ExtractJwt;
const jwt = require('../services/jwt');

const options = {
    jwtFromRequest: JwtExtractor.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwt.JWT_SECRET
};

const strategy = new JwtStrategy(options, (jwt, done) => {
    const user = {name: jwt.name, email: jwt.email};
    done(null, user);
});

module.exports = strategy;