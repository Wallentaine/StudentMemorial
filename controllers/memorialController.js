const {Memorial} = require('../models/models')
const ApiError = require('../error/ApiError')
const Sequelize = require('sequelize')

class MemorialController {
    async createMemorial(req, res, next) {
        try {
            const {userId, date, description, form} = req.body

            if (!userId || !date || !description || !form) return next(ApiError.badRequest("Не были переданы нужные параметры!"))

            const exist = await Memorial.findOne({where: {userId}})

            if (exist) return next(ApiError.badRequest("Этот пользователь уже увековечил себя в памяти!"))

            const memorial = await Memorial.create({userId, date, description, form})

            if (!memorial) return next(ApiError.internal("Что-то пошло не так!"))

            return res.json(memorial)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getRandomMemorials(req, res, next) {
        try {
            const limit = 13
            const memorials = await Memorial.findAll({order:[Sequelize.literal('RANDOM()')], limit})

            if (!memorials) return next(ApiError.internal("Что-то пошло не так!"))

            return res.json(memorials)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getOneMemorial(req, res, next) {
        try {
            const {userId} = req.params

            if (!userId) return next(ApiError.badRequest("Не был передан UserId!"))

            const memorial = await Memorial.findOne({where: {userId}})

            if (!memorial) return next(ApiError.notFound("Мемориал не найден!"))

            return res.json(memorial)
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new MemorialController()