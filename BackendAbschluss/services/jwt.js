const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secretKey';
const JWT_EXPIRES_IN = '31d';

function signUser(user) {
    return jwt.sign({
        sub: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin
    }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

module.exports = {
    signUser,
    signAdmin,
    JWT_SECRET
}