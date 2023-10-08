const { NAME_AND_PASSWORD_IS_REQUIRED, USER_NAME_IS_EXISTENT } = require('../error/errorTypes');
const userService = require('../service/user.service');

const verifyRegister = async (ctx, next) => {
  try{
    const { name, password } = ctx.request.body;
    // 校验密码的逻辑
    if (!name || !password) {
      ctx.app.emit('error', new Error(NAME_AND_PASSWORD_IS_REQUIRED), ctx);
    }
    // 校验用户名在数据库中是否存在
    const result = await userService.getUserInfoByname(name);
    if(result.length){
      return ctx.app.emit('error',new Error(USER_NAME_IS_EXISTENT),ctx)
    }
  }catch(err){
    console.log(err);
  }
	// 接收传来的账号，密码
	await next();
};

module.exports = {
	verifyRegister,
};
