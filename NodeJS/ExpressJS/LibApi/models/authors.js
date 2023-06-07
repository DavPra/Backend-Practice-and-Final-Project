const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Authors = sequelize.define('authors', {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})


module.exports = Authors
