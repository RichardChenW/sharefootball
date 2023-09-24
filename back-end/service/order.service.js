const connection = require('../sql');

class OrderService {
	async createOrder(status, orderNo, userId, stadiumId, amount) {
		const statement =
			'INSERT INTO `order`(`status`,order_number,user_id,stadium_id,amount) VALUES(?,?,?,?,?)';
		const res = await connection.execute(statement, [
			status,
			orderNo,
			userId,
			stadiumId,
			amount,
		]);
		return res;
	}
}

module.exports = new OrderService();
