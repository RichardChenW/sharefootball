const Router = require('@koa/router');
const orderController = require('../controller/order.controller');
const { verifyAuth } = require('../middleware/auth.middleware');
const { verifyOrderCreate } = require('../middleware/order.middleware');

const router = new Router({ prefix: '/order' });
router.post('/', verifyAuth, verifyOrderCreate, orderController.create);
module.exports = router;
