const questionService = require('../service/question.service');

const testSql = async () => {
	const res = await questionService.list();
	console.log(res);
};

testSql().then(() => {
	process.exit();
});
