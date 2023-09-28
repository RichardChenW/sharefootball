const questionService = require('../service/question.service');

class QuestionController {
	async list(ctx, next) {
		const questionList = await questionService.list();
		ctx.body = questionList;
		await next();
	}
}

module.exports = new QuestionController();
