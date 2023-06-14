const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Products = sequelize.define('products', {
    Titel: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
         
    }
    },
    Genre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true

        }
    },
    Typ: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
    }
    },
    Länge: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
           
    }
    },
    Preis: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            
    }
},
    Regisseur: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
           
    }
    },
    Lagerstand: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            
    }
    }
}, {
    freezeTableName: true,
    timestamps: false
})


module.exports = Products
