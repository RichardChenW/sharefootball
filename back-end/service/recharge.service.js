const connection = require('../sql');

class RechargeService {
	async recharge(amount, orderNumber, userId, status) {
		const statment =
			'INSERT INTO `user_recharge` (amount,order_number,user_id,`status`) VALUES (?,?,?,?);';
		const res = await connection.execute(statment, [
			amount,
			orderNumber,
			userId,
			status,
		]);
		return res;
	}
}

module.exports = new RechargeService();
