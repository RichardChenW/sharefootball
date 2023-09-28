const multer = require('@koa/multer');
const { v1 } = require('uuid');
const { AVATR_IS_REQUIRED } = require('../error/errorTypes');

// 创建 multer
const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, './uploads');
		},
		filename: (req, file, cb) => {
			cb(null, v1() + '-' + file.originalname);
		},
	}),
});

const uploadAvatar = upload.single('avatar'); // 相当一个中间件

const verifyUploadAvatar = async (ctx, next) => {
	const { file } = ctx.request;
	if (!file) {
		ctx.app.emit('error', new Error(AVATR_IS_REQUIRED), ctx);
		return;
	}
	ctx.avatarInfo = file;
	await next();
};

module.exports = { uploadAvatar, verifyUploadAvatar };
