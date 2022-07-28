const {Message} = require('../models/models')
const ApiError = require("../error/ApiError");

class MessageController {
    async addNewMessage(req, res, next) {
        try {
            const {userId, memorialId, message} = req.body

            if (!userId || !memorialId) return next(ApiError.badRequest("Не был передан userId и/или memorialId!"))

            const exist = await Message.findOne({where: {userId, memorialId}})

            if (exist) return next(ApiError.badRequest("Этот пользователь уже оставил послание!"))

            if (!message) return next(ApiError.badRequest("Не было передано сообщение!"))

            const letter = await Message.create({userId, memorialId, message})

            if (!letter) return next(ApiError.internal("Что-то пошло не так!"))

            return res.json(letter)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAllMessages(req, res, next) {
        try {
            const {memorialId} = req.params

            if (!memorialId) return next(ApiError.badRequest("Не был передан MemorialId!"))

            const messages = await Message.findAll({where: {memorialId}})

            if (!messages) return next(ApiError.internal("Что-то пошло не так!"))

            return res.json(messages)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new MessageController()