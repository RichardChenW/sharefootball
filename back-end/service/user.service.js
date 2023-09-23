const connection = require('../sql');

class UserService {
	async getUserInfoByname(userName) {
		const statment = 'SELECT * FROM USER WHERE `name` = ?';
		const [res] = await connection.execute(statment, [userName]);
		return res;
	}
  async getUserInfoById(id) {
		const statment = 'SELECT * FROM USER WHERE `id` = ?';
		const [res] = await connection.execute(statment, [id]);
		return res;
	}
	// 注册账号
	async register(name, password) {
		const statement = 'INSERT INTO `user` (`name`,`password`) VALUES (?,?);';
		const [result] = await connection.execute(statement, [name, password]);
		return result;
	}
	// 更新用户账户金额
	async updateUserAmount(amount, id) {
		const statement = 'UPDATE `user` SET amount = ? WHERE id = ?';
		const [result] = await connection.execute(statement, [amount, id]);
	}
}

module.exports = new UserService();
