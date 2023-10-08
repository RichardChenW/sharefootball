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
const uploadRouter = require('./router/upload.router');
const fileRouter = require('./router/file.router');
const updateRouter = require('./router/update.router');
const testRouter = require('./router/test.router');
const { wrapperMiddleware } = require('./middleware/wrapper.middleware');
// 解决跨域
const cors = require('@koa/cors');

const app = new Koa();

app.use(bodyParser());
app.use(staticServer('static'));
app.use(logger());
app.use(cors());
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
// 注册上传路由
app.use(uploadRouter.routes());
app.use(uploadRouter.allowedMethods());
app.use(fileRouter.routes());
app.use(fileRouter.allowedMethods());
// 注册更新路由
app.use(updateRouter.routes());
app.use(updateRouter.allowedMethods());
app.use(testRouter.routes());

// 接口数据结构处理中间件，必须放在最后，就是所有中间件跑完，会来到这
app.use(wrapperMiddleware);

app.use((ctx, next) => {
	ctx.body = 'Hello Koa!';
});

module.exports = app;
