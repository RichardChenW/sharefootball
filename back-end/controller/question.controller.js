const questionService = require('../service/question.service');

class QuestionController {
	async list(ctx) {
		const questionList = await questionService.list();
		ctx.body = questionList;
	}
}

module.exports = new QuestionController();
