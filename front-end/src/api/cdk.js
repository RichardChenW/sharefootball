import {
	request
} from '@/request';

export default {
	cdkeyExchange(data, header) {
		return request.post('/cdkey/exchange', data, header)
	}
}