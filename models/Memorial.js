const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Memorial = sequelize.define('memorial', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    form: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    Memorial
}