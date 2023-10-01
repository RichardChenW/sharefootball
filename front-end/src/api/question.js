import { request } from "@/request/index.js"

export default {
	getQuestionList(){
		return request.get('/question/list')
	}
}

