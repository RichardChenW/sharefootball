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
	async getOrderInfoByOderNo(orderNumber) {
		const statement = 'SELECT * FROM `order` WHERE `order_number` = ?;';
		const [res] = await connection.execute(statement, [orderNumber]);
		return res;
	}
	async finishOrder(orderNumber) {
		const statement =
			'UPDATE `order` SET `status` = ? WHERE `order_number` = ?;';
		const [res] = await connection.execute(statement, [0, orderNumber]);
		return res;
	}
	async getList(userId) {
		const statement = 
    `
      SELECT
        o.id,
        o.order_number,
        o.amount,
        o.status,
        o.create_at,
        o.update_at,
        JSON_OBJECT('id',s.id,'name',s.name,'address',s.address) AS 'stadium_info'
      FROM \`order\` AS o
      JOIN \`stadium\` AS s 
      ON o.stadium_id = s.id
      WHERE o.user_id = ?;  
    `
		const [res] = await connection.execute(statement, [userId]);
		return res;
	}
}

module.exports = new OrderService();
