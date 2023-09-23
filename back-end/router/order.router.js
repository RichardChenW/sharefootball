const Router = require('@koa/router');
const orderController = require('../controller/order.controller');

const router = new Router({ prefix: '/order' });
router.post('/',orderController.create);
module.exports = router;
