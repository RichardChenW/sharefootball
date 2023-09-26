// 根据解析的token是否有效来判断在数据库中是否有对应的token

const { TOKEN_IS_REQUIRED, TOKEN_IS_INVALID } = require('../error/errorTypes');
const { tokenParse } = require('../utils/tokenHandler');

const verifyAuth = async (ctx, next) => {
	const { authorization } = ctx.request.header;
	if (!authorization) {
		ctx.app.emit('error', new Error(TOKEN_IS_REQUIRED), ctx);
		return;
	}
	const token = authorization.replace('Bearer ', '');
	// 如果有捕获的token无法解析
	let userInfo;
	try {
		userInfo = tokenParse(token); // eg: { id: 3, name: 'richard',amount: '4000.00',, iat: 1695404963, exp: 1695491363 }
	} catch (error) {
		ctx.app.emit('error', new Error(TOKEN_IS_INVALID), ctx);
		return;
	}
	ctx.userInfo = userInfo;
	await next();
};

module.exports = { verifyAuth };
