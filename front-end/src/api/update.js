import {
	request
} from "@/request";

export const getUserInfoByToken = (header) => {
	return request.post('/update/user', undefined, header)
}