import {
	request
} from "@/request";

export default {
	recharge(data,header) {
		return request.post('/recharge', data,header)
	}
}