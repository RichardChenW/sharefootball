const { passwordEncrypt } = require('../utils/passwordEncrypt');

(async () => {
	res = await passwordEncrypt("12346");
	console.log(res);
})();
