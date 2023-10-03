const userService = require("../service/user.service");

class UpdateController {
	async userInfo(ctx, next) {
    const [res] = await userService.getUserInfoById(ctx.userInfo.id)
		ctx.body = res;
		await next();
	}
}

module.exports = new UpdateController();
