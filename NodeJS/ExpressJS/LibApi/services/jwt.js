const jwt = require('jsonwebtoken')

const JWT_SECRET = 'DasIstMeinSuperKomlexerGemeinerSchluesselDenKeineKennt'
const JWT_EXPIRE_IN = '31d'

function signUser(user) {
    return jwt.sign({
        sub: user.id,
        name: user.name,
        email: user.email,  

    }, JWT_SECRET, {expiresIn: JWT_EXPIRE_IN})
}

module.exports = {
    signUser,
    JWT_SECRET
}
