const express = require('express')
const app = express()
const register = require('./router/register')
const login = require('./router/login')
const gBooks = require('./router/gBooks')
//const authors = require('./router/authors')
const pBooks = require('./router/pBooks')
const passport = require('passport')
const localStrategy = require('./strategies/localStrategy')
const jwtStrategy = require('./strategies/jwtStrategy')


app.use(express.json())
app.use(passport.initialize())

passport.use('local', localStrategy)
passport.use('jwt', jwtStrategy)

app.use('/api', register)
app.use('/api', login)
app.use('/api/books', gBooks)
app.use('/api', pBooks)
//app.use('/api/authors', authors)



app.listen(3000)
