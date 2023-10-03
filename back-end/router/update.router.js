const Router = require('@koa/router');
const updateController = require('../controller/update.controller');
const { verifyAuth } = require('../middleware/auth.middleware');

const router = new Router({ prefix: '/update' });


router.post('/user',verifyAuth,updateController.userInfo);

module.exports = router;
