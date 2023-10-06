import {
	request
} from '@/request';

export default {
	createOrder(data, header) {
		return request.post("/order/create", data, header)
	},
	finishOrder(data, header) {
		return request.post("/order/finish", data, header)
	}
}