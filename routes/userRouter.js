const Router = require('express')
const router = new Router()

const userController = require('../controllers/userController')

router.post('/', userController.registration)
router.get('/', userController.login)
router.get('/', userController.check)

module.exports = router