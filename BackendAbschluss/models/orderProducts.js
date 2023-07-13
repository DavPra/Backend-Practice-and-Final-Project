const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const orderProducts = sequelize.define('orderProducts', {
    OrderId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: orders,
            key: 'id'
        }
    },
    ProductId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        references: {
            model: products,
            key: 'id'
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