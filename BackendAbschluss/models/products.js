const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Products = sequelize.define('products', {
    Titel: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
    }
    },
    Genre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
    }
    },
    Typ: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
    }
    },
    Länge: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
    }
    },
    Preis: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
    }
    },
    Regisseur: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
    }
    },
    Lagerstand: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isLowercase: true
    }
    }
}, {
    freezeTableName: true,

})

module.exports = Products
