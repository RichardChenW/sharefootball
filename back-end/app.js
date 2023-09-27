const Koa = require('koa');

// 将常用的中间件全部注册
const bodyParser = require('koa-bodyparser');
const staticServer = require('koa-static');
const logger = require('koa-logger');
const errorHandler = require('./error/index');

// 导入所有路由
const stadiumRouter = require('./router/stadium.router');
const registerRouter = require('./router/register.router');
const loginRouter = require('./router/login.router');
const rechargeRouter = require('./router/recharge.router');
const cdkRouter = require('./router/cdk.router');
const orderRouter = require('./router/order.router');
const questionRouter = require('./router/question.router');

const app = new Koa();

app.use(bodyParser());
app.use(staticServer('static'));
app.use(logger());
app.on('error', errorHandler);

// 注册获取场馆信息路由
app.use(stadiumRouter.routes());
app.use(stadiumRouter.allowedMethods());
// 注册用户注册接口的路由
app.use(registerRouter.routes());
app.use(registerRouter.allowedMethods());
// 注册用户登录接口路由
app.use(loginRouter.routes());
app.use(loginRouter.allowedMethods());
// 注册充值路由
app.use(rechargeRouter.routes());
app.use(rechargeRouter.allowedMethods());
// 注册cdk路由
app.use(cdkRouter.routes());
app.use(cdkRouter.allowedMethods());
// 注册创建订单路由
app.use(orderRouter.routes());
app.use(orderRouter.allowedMethods());
// 注册订单问题列表
app.use(questionRouter.routes());
app.use(questionRouter.allowedMethods());

app.use((ctx, next) => {
	ctx.body = 'Hello Koa!';
});

module.exports = app;
