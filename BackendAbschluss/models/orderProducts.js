const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const orderProducts = sequelize.define('orderProducts', {
    OrderId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    ProductId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    Quantity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = orderProducts