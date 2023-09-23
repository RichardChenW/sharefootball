const { v4 } = require('uuid');

const orderNumberGenerator = ()=> v4();

module.exports = orderNumberGenerator