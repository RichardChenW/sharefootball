const mysql2 = require('mysql2');
const { DATABASE_SETTING } = require('./env');

const pool = mysql2.createPool({
	host: DATABASE_SETTING.HOST,
	port: DATABASE_SETTING.PORT,
	user: DATABASE_SETTING.USER,
	password: DATABASE_SETTING.PASSWORD,
	database: DATABASE_SETTING.DATABASE,
});

module.exports = pool.promise();
