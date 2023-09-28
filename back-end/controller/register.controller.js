const userService = require("../service/user.service");
const { passwordEncrypt } = require("../utils/passwordEncrypt");

class RegisterController {
	async register(ctx, next) {
    const {name,password} = ctx.request.body;
    // 密码加密
    const passwordEncrypted = await passwordEncrypt(password);

    await userService.register(name,passwordEncrypted)
		ctx.message = "注册成功"
    await next()
	}
}

module.exports = new RegisterController();
