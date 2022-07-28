const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')

router.post('/', messageController.addNewMessage)
router.get('/', messageController.getAllMessages)

module.exports = router