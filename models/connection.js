const {User} = require("./User")
const {Memorial} = require("./Memorial")
const {Message} = require("./Message")

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