const { APP_HOST, APP_PORT } = require('../env');
const uploadService = require('../service/upload.service');
const userService = require('../service/user.service');

class UploadController {
	async avatar(ctx) {
		const { filename, mimetype, size } = ctx.avatarInfo;
		const { id: userId } = ctx.userInfo;
		const res = await uploadService.insertAvatarFile(
			filename,
			mimetype,
			size,
			userId
		);
    // 如果更新上传成功，更新用户的头像,要拼接成一个静态地址
    if(res.insertId){
      userService.updateUserAvayar(`${APP_HOST}:${APP_PORT}/file/avatar/${filename}`,userId)
    }
		ctx.body = res;
	}
}

module.exports = new UploadController();
