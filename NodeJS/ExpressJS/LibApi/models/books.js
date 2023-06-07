const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')
const Authors = require("./authors");

const Books = sequelize.define('books', {
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

Books.belongsTo(Authors)
Authors.hasMany(Books)

module.exports = Books
