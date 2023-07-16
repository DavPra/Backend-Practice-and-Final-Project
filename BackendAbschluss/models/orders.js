const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')
const Users = require('./users')
const allUsers = require('./allUsers')

const orders = sequelize.define('orders', {
    OrderStatus: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    UserId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: allUsers,
            key: 'id'
    }

    },
   /* OrderId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    }*/

}, {
    timestamps: false,
    freezeTableName: true,
    createdAt: true
})

module.exports = orders