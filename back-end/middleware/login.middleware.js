const {
	NAME_AND_PASSWORD_IS_REQUIRED,
	USER_NAME_IS_NOT_EXISTENT,
	USER_PASSWORD_IS_WRONG,
} = require('../error/errorTypes');
const userService = require('../service/user.service');
const { passwordDecrypt } = require('../utils/passwordEncrypt');

const verifyLogin = async (ctx, next) => {
	const { name, password } = ctx.request.body;
	if (!name || !password) {
		return ctx.app.emit('error', new Error(NAME_AND_PASSWORD_IS_REQUIRED), ctx);
	}
	// 拿到用户名和密码之后，判断用户名是否存在
	const result = await userService.getUserInfoByname(name);
	if (!result.length) {
		return ctx.app.emit('error', new Error(USER_NAME_IS_NOT_EXISTENT), ctx);
	}
	// 如果查到了用户信息,一个[{用户信息}]，执行的逻辑
	const [userInfo] = result;
	// 验证密码是否一致
	const verifyPassword = await passwordDecrypt(password, userInfo.password);
	if (!verifyPassword) {
		return ctx.app.emit('error', new Error(USER_PASSWORD_IS_WRONG), ctx);
	}
	ctx.userInfo = userInfo;
	await next();
};

module.exports = {
	verifyLogin,
};
