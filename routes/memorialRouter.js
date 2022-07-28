const Router = require('express')
const router = new Router()
const memorialController = require('../controllers/memorialController')

router.post('/', memorialController.createMemorial)
router.get('/', memorialController.getRandomMemorials)
router.get('/:userId', memorialController.getOneMemorial)


module.exports = router