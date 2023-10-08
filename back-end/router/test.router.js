const Router = require('@koa/router');

const router = new Router({ prefix: '/test' });

router.get('/', async (ctx, next) => {
	ctx.body = 'hello';
	await next();
});

module.exports = router
