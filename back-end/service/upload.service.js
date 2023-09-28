const connection = require('../sql');

class UploadService {
	async insertAvatarFile(filename, mimetype, size, userId) {
		const statement = `
        INSERT INTO \`file\` (filename,mimetype,size,user_id) VALUES (?,?,?,?);
      `;
		const [res] = await connection.execute(statement,[filename, mimetype, size, userId]);
		return res;
	}
}

module.exports = new UploadService();
