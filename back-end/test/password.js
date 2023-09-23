const {
	passwordDecrypt,
	passwordEncrypt,
} = require('../utils/passwordEncrypt');

(async () => {
	const res = await passwordDecrypt(
		'wangwang123',
		'$2b$10$I5M9y/d1bxTlqrL7mzpBfegL0j13zZWHprQrPKb/cIwNqrXNKUhIG'
	);
	console.log(res);
})();

// (async () => {
// 	const res = await passwordEncrypt('wangwang123');
// 	console.log(res);
// })();
