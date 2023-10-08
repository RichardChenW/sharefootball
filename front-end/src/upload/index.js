const app = getApp();

class UploadFile {
	constructor(domain) {
		this.domain = domain
	}
	upload(url, name, filePath,header) {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: `${this.domain}${url}`,
				name,
				filePath,
				header,
				success(res) {
					resolve(JSON.parse(res.data))
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}
	uploadAvatar(url,name,filePath,header){
		return this.upload(url,name,filePath,header)
	}
}

export const upload = new UploadFile("http://8.134.152.216:8080")