const app = require('./app');
const { APP_HOST, APP_PORT } = require('./env');

app.listen(APP_PORT, () => {
	console.log(`server start at ${APP_HOST}:${APP_PORT}`);
});
