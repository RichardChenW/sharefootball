const { tokenGenerate, tokenParse } = require('../utils/tokenHandler');

class LoginController {
	async login(ctx) {
		const { id, name, amount } = ctx.userInfo;
		const token = tokenGenerate({ id, name, amount });
		ctx.body = {
			id,
			name,
			token,
		};
	}
}

module.exports = new LoginController();
