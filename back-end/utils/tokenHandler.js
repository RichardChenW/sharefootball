const jwt = require('jsonwebtoken');
const { PRIVATE_KEY, PUBLIC_KEY } = require('../env');

const tokenGenerate = payload => {
	const result = jwt.sign(payload, PRIVATE_KEY, {
		// 过期时间
		expiresIn: '1d',
		// 算法
		algorithm: 'RS256',
	});
	return result;
};

const tokenParse = token => {
	const result = jwt.verify(token, PUBLIC_KEY, {
		algorithms: ['RS256'],
	});
	return result;
};


module.exports = {
	tokenGenerate,
	tokenParse,
};
