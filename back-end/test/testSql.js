const stadiumService = require("../service/stadium.service");

(async () => {
	const res = await stadiumService.list();
	console.log(res);
})();