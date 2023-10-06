import {
	request
} from "@/request";

const app = getApp();

export const getUserInfoByToken = () => {
	return request.post('/update/user', undefined, {Authorization:app.globalData.token})
}