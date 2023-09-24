const orderService = require('../service/order.service');

class OrderController {
	async create(ctx) {
		const { status, orderNumber, stadiumId } = ctx.orderInfo;
		const { id: userId } = ctx.userInfo;
		const orderInfo = [status, orderNumber, userId, stadiumId, status ? 15 : 0]; //status, orderNo, userId, stadiumId, amount
		const [res] = await orderService.createOrder(...orderInfo);
		console.log(typeof res, res);
		if (!res.insertId) {
			ctx.body = '订单创建失败';
			return;
		}
		if (!status) {
			ctx.body = {
				msg: '订单创建异常',
				orderNumber,
			};
			return;
		}
		ctx.body = {
			msg: '订单创建成功',
			orderNumber,
		};
	}
}

module.exports = new OrderController();
