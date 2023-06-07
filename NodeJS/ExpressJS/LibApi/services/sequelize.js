const Sequelize = require('sequelize');

const sequelize = new Sequelize ('library', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

seqeulize.sync({alter: true})

module.exports = sequelize;