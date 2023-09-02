const app = require('express')
const router = app.Router()
const {demomail, addOrders, allOrders, orderById} = require('./controller')

router.post('/send_demo_mail', demomail)
router.post('/addOrders', addOrders)
router.get('/allOrders', allOrders)
router.get('/orderById', orderById)

module.exports = router