const userService = require("../service/user.service");
const { passwordEncrypt } = require("../utils/passwordEncrypt");

class RegisterController {
	async register(ctx, next) {
    const {name,password} = ctx.request.body;
    // 密码加密
    const passwordEncrypted = await passwordEncrypt(password);

    await userService.register(name,passwordEncrypted)
		ctx.body = '注册成功！';
	}
}

module.exports = new RegisterController();
