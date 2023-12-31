const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Users = sequelize.define('users',{
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    telNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    strasse: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    ort: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    plz: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = Users