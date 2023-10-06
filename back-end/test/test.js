const cdkService = require('../service/cdk.service');

async () => {
	const res = cdkService.getCdkeyInfoByCdkey('1234');
	console.log(res);
};
