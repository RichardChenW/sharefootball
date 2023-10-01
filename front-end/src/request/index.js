class Request {
	constructor(domain) {
		this.domain = domain
	}
	request(path, data, method) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.domain}${path}`,
				method,
				data,
				timeout: 6000,
				success(res) {
					resolve(res)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
	get(path, data) {
		return this.request(path, data, 'GET')
	}
	post(path, data) {
		return this.request(path, data, 'POST')
	}
}

// export const request = new Request('http://localhost:8080')
export const request = new Request('http://192.168.31.245:8080')
