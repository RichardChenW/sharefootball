const StadiumService = require('../service/stadium.service');

class StadiumController {
	async list(ctx, next) {
		if (ctx.query.id) {
			const stadiumList = await StadiumService.queryList(ctx.query.id);
			ctx.body = stadiumList;
			return;
		}
		const stadiumList = await StadiumService.list();
		ctx.body = stadiumList;
		await next();
	}
}

module.exports = new StadiumController();
