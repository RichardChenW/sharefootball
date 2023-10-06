const orderService = require('../service/order.service');
const userService = require('../service/user.service');

class OrderController {
	async create(ctx, next) {
		const { status, orderNumber, stadiumId } = ctx.orderInfo;
		const { id: userId } = ctx.userInfo;
		const orderInfo = [status, orderNumber, userId, stadiumId, status ? 15 : 0]; //status, orderNo, userId, stadiumId, amount
		const [res] = await orderService.createOrder(...orderInfo);
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
		await next();
	}
	async finish(ctx, next) {
		const { order_number: orderNumber } = ctx.orderInfo;
		const res = await orderService.finishOrder(orderNumber);
		// 给用户扣钱
		if (res.affectedRows) {
			const { id, amount } = ctx.userInfo;
			const res = await userService.updateUserAmount(
				parseFloat(amount) - 15,
				id
			);
		}
		ctx.body = '结束订单';
		await next();
	}
	async list(ctx, next) {
		const { id: userId } = ctx.userInfo;
		const res = await orderService.getList(userId);
		ctx.body = res;
		await next();
	}
}
module.exports = new OrderController();
