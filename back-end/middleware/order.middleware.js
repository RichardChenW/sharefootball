const {
	STADIUMID_IS_REQUIRED,
	ORDER_STATUS_IS_ZERO,
} = require('../error/errorTypes');
const orderNumberGenerator = require('../utils/orderNumberHandler');
const {
	ORDER_NUMBER_IS_REQUIRED,
	ORDER_NUMBER_IS_INVALID,
} = require('../error/errorTypes');
const orderService = require('../service/order.service');

const verifyOrderCreate = async (ctx, next) => {
	const { stadiumId } = ctx.request.body;
	if (!stadiumId) {
		ctx.app.emit('error', new Error(STADIUMID_IS_REQUIRED), ctx);
		return;
	}
	const status = 1;
	const orderNumber = orderNumberGenerator();
	ctx.orderInfo = {
		stadiumId,
		status,
		orderNumber,
	};
	await next();
};

const verifyOrderFinish = async (ctx, next) => {
	const { orderNumber } = ctx.request.body;
	if (!orderNumber) {
		ctx.app.emit('error', new Error(ORDER_NUMBER_IS_REQUIRED), ctx);
		return;
	}
	// 查看订单号相关信息
	const [orderInfo] = await orderService.getOrderInfoByOderNo(orderNumber);
	if (!orderInfo) {
		ctx.app.emit('error', new Error(ORDER_NUMBER_IS_INVALID), ctx);
		return;
	}
	// 如果是1也无法执行
	if (!orderInfo.status) {
		ctx.app.emit('error', new Error(ORDER_STATUS_IS_ZERO), ctx);
		return;
	}
	ctx.orderInfo = orderInfo; 
  /*
  orderInfo example
  {
    id: 10,
    status: 1,
    order_number: '634bf4f7-3494-4928-97d3-3ee5f926c70d',
    user_id: 5,
    stadium_id: 1,
    amount: '0.00',
    create_at: 2023-09-24T13:53:57.000Z,
    update_at: 2023-09-25T20:26:03.000Z
  } 
*/
	await next();
};

module.exports = { verifyOrderCreate, verifyOrderFinish };
