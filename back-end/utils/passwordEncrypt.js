const bcrypt = require('bcrypt');

//密码加密
const passwordEncrypt = async password => {
	const result = await bcrypt.hash(password, 10);
	return result;
};

const passwordDecrypt = async (password, existPassword) => {
	const result = await bcrypt.compare(password, existPassword);
	return result;
};

module.exports = {
  passwordEncrypt,
  passwordDecrypt
}