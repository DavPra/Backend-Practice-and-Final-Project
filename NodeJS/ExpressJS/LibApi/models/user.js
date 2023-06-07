const sequelize = require('../services/sequelize')
const Sequelize = require('sequelize')

const Users = sequelize.define('users',{
    username: {
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
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = Users
