const { tokenGenerate, tokenParse } = require('../utils/tokenHandler');

class LoginController {
	async login(ctx,next) {
    const { id, name, amount,avatar} = ctx.userInfo;
    const token = tokenGenerate({ id, name, amount });
    ctx.body = {
      id,
      name,
      amount,
      avatar,
      token,
    };
    await next();
	}
}

module.exports = new LoginController();
