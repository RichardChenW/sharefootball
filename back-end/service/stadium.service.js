const connection = require('../sql');

class StadiumService {
	async list() {
		const statement = 'SELECT * FROM STADIUM';
    // 将返回的数据解构出来，第一项是数据
		const [res] = await connection.execute(statement);
    return res
	}
  async queryList(id){
    const statement = `
      SELECT
        * 
      FROM
        stadium
      WHERE
        ID = ${id};
    `
    const [res] = await connection.execute(statement);
    return res
  }
}

module.exports = new StadiumService();
