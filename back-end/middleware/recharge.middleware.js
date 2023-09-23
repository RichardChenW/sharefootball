const { RECHARGE_AMOUNT_IS_REQUIRED } = require('../error/errorTypes');
const orderNumberGenerator = require('../utils/orderNumberHandler');

const verifyRecharge = async (ctx, next) => {
	const { amount } = ctx.request.body;
	if (!amount) {
		ctx.app.emit('error', new Error(RECHARGE_AMOUNT_IS_REQUIRED), ctx);
		return;
	}
	// 0 失败 1 成功
	const status = Math.round(Math.random());
	const orderNo = orderNumberGenerator();

	const orderInfo = {
		amount,
		status,
		orderNo,
	};
	ctx.orderInfo = orderInfo;
	await next();
};

module.exports = { verifyRecharge };
