const Router = require('express')
const router = new Router()
const memorialController = require('../controllers/memorialController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, memorialController.createMemorial)
router.get('/', memorialController.getRandomMemorials)
router.get('/search/:desired', memorialController.searchMemorials)
router.get('/:memorialId', memorialController.getOneMemorial)
router.get('/user/:userId', memorialController.getMemorialByUserId)

module.exports = router