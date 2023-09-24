// 创建错误处理的中间件

const {
	NAME_AND_PASSWORD_IS_REQUIRED,
	USER_NAME_IS_EXISTENT,
	USER_NAME_IS_NOT_EXISTENT,
	USER_PASSWORD_IS_WRONG,
	TOKEN_IS_REQUIRED,
	TOKEN_IS_INVALID,
	RECHARGE_AMOUNT_IS_REQUIRED,
	CDK_IS_REQUIRED,
	CDK_IS_INVALID,
	CDK_IS_EXPIRED,
	STADIUMID_IS_REQUIRED,
} = require('./errorTypes');

// 所有在服务器发生的错误都会被捕捉到,在捕捉的地方更改返回的状态码和信息
const errorHandler = (error, ctx) => {
	let status = 200;
	let message = 'success';

	switch (error.message) {
		case NAME_AND_PASSWORD_IS_REQUIRED:
			status = 400;
			message = NAME_AND_PASSWORD_IS_REQUIRED;
			break;
		case USER_NAME_IS_EXISTENT:
			status = 400;
			message = USER_NAME_IS_EXISTENT;
			break;
		case USER_NAME_IS_NOT_EXISTENT:
			status = 400;
			message = USER_NAME_IS_NOT_EXISTENT;
			break;
		case USER_PASSWORD_IS_WRONG:
			status = 400;
			message = USER_PASSWORD_IS_WRONG;
			break;
		case TOKEN_IS_REQUIRED:
			status = 302;
			message = TOKEN_IS_REQUIRED;
			break;
		case TOKEN_IS_INVALID:
			status = 302;
			message = TOKEN_IS_INVALID;
			break;
		case RECHARGE_AMOUNT_IS_REQUIRED:
			status = 400;
			message = RECHARGE_AMOUNT_IS_REQUIRED;
			break;
		case CDK_IS_REQUIRED:
			status = 400;
			message = CDK_IS_REQUIRED;
			break;
		case CDK_IS_INVALID:
			status = 400;
			message = CDK_IS_INVALID;
			break;
		case CDK_IS_EXPIRED:
			status = 400;
			message = CDK_IS_EXPIRED;
			break;
		case STADIUMID_IS_REQUIRED:
			status = 400;
			message = STADIUMID_IS_REQUIRED;
			break;
		default:
			console.log('nothing is matched');
	}

	ctx.status = status;
	ctx.body = message;
};

module.exports = errorHandler;
