const Router = require('@koa/router');
const { verifyRegister } = require('../middleware/register.middleware');
const RegisterController = new require('../controller/register.controller');

const router = new Router({ prefix: '/register' });

router.post('/', verifyRegister, RegisterController.register);

module.exports = router;
