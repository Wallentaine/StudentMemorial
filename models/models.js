const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "STUDENT"},
})

const Memorial = sequelize.define('memorial', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    form: {type: DataTypes.STRING, allowNull: false}
})

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message: {type: DataTypes.STRING, allowNull: false}
})

User.hasOne(Memorial)
Memorial.belongsTo(User)

User.hasOne(Message)
Message.belongsTo(User)

Memorial.hasMany(Message)
Message.belongsTo(Memorial)

module.exports = {
    User,
    Memorial,
    Message,
}
