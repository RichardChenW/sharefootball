const { STADIUMID_IS_REQUIRED } = require('../error/errorTypes');
const orderNumberGenerator = require('../utils/orderNumberHandler');

const verifyOrderCreate = async (ctx, next) => {
	const { stadiumId } = ctx.request.body;
	if (!stadiumId) {
		ctx.app.emit('error', new Error(STADIUMID_IS_REQUIRED), ctx);
		return;
	}
	const status = Math.round(Math.random());
	const orderNumber = orderNumberGenerator();
	ctx.orderInfo = {
		stadiumId,
		status,
		orderNumber,
	};
	await next();
};

module.exports = { verifyOrderCreate };
