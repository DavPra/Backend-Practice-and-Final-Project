const Sequelize = require('sequelize');

const sequelize = new Sequelize ('library', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

sequelize.sync({alter: true})

module.exports = sequelize;