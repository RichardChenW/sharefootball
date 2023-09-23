const connection = require('../sql');
class CdkService {
	async getCdkeyInfoByCdkey(cdkey) {
		const statment = 'SELECT * FROM `user_cdk` WHERE cdkey = ?;';
		const [res] = await connection.execute(statment, [cdkey]);
		return res;
	}
	async updateCdkeyStatus(cdkId, userId) {
		const statment = 'UPDATE user_cdk SET `status` = 0 ,`used_user_id` = ? WHERE id = ?;';
		const [res] = await connection.execute(statment, [userId,cdkId]);
		return res;
	}
}

module.exports = new CdkService();
