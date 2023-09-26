const orderService = require('../service/order.service');

// (async () => {
// 	const res = await orderService.getList(3);
// 	console.log(res);
//   return;
// })();

const func = async () => {
	const res = await orderService.getList(3);
	console.log(res);
	return;
};

func().then(()=>{
  process.exit()
});

console.log('hello world');
