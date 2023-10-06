import {
	request
} from '@/request';

const app = getApp();

export default {
	createOrder(data, header) {
		return request.post("/order/create", data, header)
	},
	finishOrder(data, header) {
		return request.post("/order/finish", data, header)
	},
	async getOrder() {
		const {
			data
		} = await request.get('/order/list', undefined, {
			Authorization: app.globalData.token
		})
		return data
	}
}