import { request } from "@/request/index.js"

export default {
	getStadiumList(){
		return request.get("/stadium/list")
	}
}
