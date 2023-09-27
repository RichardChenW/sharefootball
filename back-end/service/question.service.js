const connection = require('../sql');

class QuestionService {
	async list() {
		const statment = 
    `
      SELECT
        qt.id,
        qt.name,
        JSON_ARRAYAGG(JSON_OBJECT('id',qd.id,'title',qd.title,'answer',qd.answer)) AS \`detail\`,
        COUNT(*) AS \`detailCount\`
      FROM
        \`question_detail\` AS qd
      JOIN question_type AS qt ON qd.type_id = qt.id
      GROUP BY qt.type;
    `
    ;
		const [res] = await connection.execute(statment);
		return res;
	}
}

module.exports = new QuestionService();
