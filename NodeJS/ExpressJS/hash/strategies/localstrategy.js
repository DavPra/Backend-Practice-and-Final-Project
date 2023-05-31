const LocalStrategy = require('passport-local').Strategy;
const database = require('../services/database');

const options = {usernameField: 'email'};
const strategy = new LocalStrategy(options, async (email, password, done) => {
    try {
        const user = await database.findUserByCredetials({email, password});
        done(null, user);
    } catch (e) {
        done(e);
    }
});