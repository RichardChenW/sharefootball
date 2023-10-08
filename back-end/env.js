const fs = require('fs');
const APP_HOST = '8.134.152.216';
const APP_PORT = 8080;
const DATABASE_SETTING = {
	HOST: '8.134.152.216',
	PORT: 3306,
	USER: 'root',
	PASSWORD: 'Cw94618!',
	DATABASE: 'share_football',
};

const PRIVATE_KEY = fs.readFileSync('./keys/private.pem');
const PUBLIC_KEY = fs.readFileSync('./keys/public.pem');

module.exports = {
	APP_HOST,
	APP_PORT,
	DATABASE_SETTING,
	PRIVATE_KEY,
  PUBLIC_KEY
};
