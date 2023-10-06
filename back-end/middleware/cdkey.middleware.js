const cdkService = require('../service/cdk.service');
const {
	CDK_IS_INVALID,
	CDK_IS_REQUIRED,
	CDK_IS_EXPIRED,
} = require('../error/errorTypes');

const verifyCdkey = async (ctx, next) => {
	const { cdkCode } = ctx.request.body;
	if (!cdkCode) {
		ctx.app.emit('error', new Error(CDK_IS_REQUIRED), ctx);
	}
	const cdkRes = await cdkService.getCdkeyInfoByCdkey(cdkCode);
	if (!cdkRes.length) {
		ctx.app.emit('error', new Error(CDK_IS_INVALID), ctx);
		return;
	}
	if (!cdkRes.status) {
		ctx.app.emit('error', new Error(CDK_IS_EXPIRED), ctx);
		return;
	}
	ctx.cdkInfo = cdkRes;
	await next();
};

module.exports = { verifyCdkey };
