const fileService = require('../service/file.service');

const verifyRead = async (ctx, next) => {
	const { filename } = ctx.request.params;
	const [fileInfo] = await fileService.getFileInfoByFileName(filename);
	// if(!fileInfo.length){
  //   ctx.app.emit('error',new Error("file doesn't exsist!"),ctx)
  // }
  ctx.fileInfo = fileInfo 
  /*  
  fileInfo
  {
    id: 8,
    filename: '99221900-5db0-11ee-b43c-11294cc98a4e-1046291.jpg',
    mimetype: 'image/jpeg',
    size: 3898909,
    user_id: 3,
    createAt: 2023-09-28T03:39:15.000Z,
    updateAt: 2023-09-28T03:39:15.000Z
  } 
  */
	await next();
};

module.exports = {
	verifyRead,
};
