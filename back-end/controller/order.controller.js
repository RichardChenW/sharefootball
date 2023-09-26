const orderService = require('../service/order.service');
const userService = require('../service/user.service');

class OrderController {
	async create(ctx) {
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
	}
	async finish(ctx) {
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
	}
	async list(ctx) {
		const { id: userId } = ctx.userInfo;
		const res = await orderService.getList(userId);
		ctx.body = res;
	}
}
module.exports = new OrderController();
