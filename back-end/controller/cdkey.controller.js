const cdkService = require('../service/cdk.service');

class CdkeyController {
	async exchange(ctx, next) {
		// 执行更新cdk状态逻辑，1未使用（生效中），0已使用（失效)
    const { id: cdkId } = ctx.cdkInfo;
    const { id: userId } = ctx.userInfo;
    const res = await cdkService.updateCdkeyStatus(cdkId, userId);
    ctx.body = '兑换成功';
	}
}

module.exports = new CdkeyController();
