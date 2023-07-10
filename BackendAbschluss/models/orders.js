const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Orders = sequelize.define('orders', {
    OrderID: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    OrderDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
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
        }
    }
    
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = Orders