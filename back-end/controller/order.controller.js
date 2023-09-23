class OrderController {
	async create(ctx) {
		ctx.body = 'create order';
	}
}

module.exports = new OrderController();
