const connection = require('../sql');

class FileService {
	async getFileInfoByFileName(filename) {
		const statment = 'SELECT * FROM `file` WHERE filename = ?';
		const [res] = await connection.execute(statment, [filename]);
		return res;
	}
}

module.exports = new FileService();
