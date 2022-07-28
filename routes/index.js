const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const memorialRouter = require('./memorialRouter')
const messageRouter = require('./messageRouter')

router.use('/user', userRouter)
router.use('/memorial', memorialRouter)
router.use('/message', messageRouter)

module.exports = router

