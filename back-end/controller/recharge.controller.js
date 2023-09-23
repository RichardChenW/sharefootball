const rechargeService = require('../service/recharge.service');
const userService = require('../service/user.service');

class RechargeController {
	async recharge(ctx) {
		const { id: user_id } = ctx.userInfo;
		const { amount, status, orderNo } = ctx.orderInfo;
		// recharge表插入数据
		const res = await rechargeService.recharge(
			amount,
			orderNo,
			user_id,
			status
		);
		if (!status) {
			ctx.body = '充值失败！';
			return;
		}
		// 更新充值金额
    const [userInfo] = await userService.getUserInfoById(user_id);
    const beforeAmount = parseFloat(userInfo.amount);
    const afterAmount = beforeAmount + amount;
    const rechargeRes = await userService.updateUserAmount(
      afterAmount,
      user_id
    );
	

		ctx.body = '充值成功！';
	}
}

module.exports = new RechargeController();
