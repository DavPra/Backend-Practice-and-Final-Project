const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const guestUsers = sequelize.define('guestUsers', {
    Name : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    Strasse : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    Ort : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    PlZ : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    Email : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    TelNmr : {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
})