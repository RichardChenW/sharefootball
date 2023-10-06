const app = getApp();

class Request {
	constructor(domain) {
		this.domain = domain
	}
	request(path, data, method, header) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.domain}${path}`,
				method,
				data,
				header,
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
	get(path, data, header) {
		return this.request(path, data, 'GET', header)
	}
	post(path, data, header) {
		return this.request(path, data, 'POST', header)
	}
}

// export const request = new Request('http://localhost:8080')
export const request = new Request('http://192.168.31.245:8080')