const { tokenGenerate, tokenParse } = require('../utils/tokenHandler');

class LoginController {
	async login(ctx) {
		const { id, name } = ctx.userInfo;
		const token = tokenGenerate({ id, name });
		ctx.body = {
      id,
      name,
      token
    };
	}
}

module.exports = new LoginController();
