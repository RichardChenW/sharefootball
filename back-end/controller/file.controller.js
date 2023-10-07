const fs = require('fs');
const path = require('path')

class FileController {
	async read(ctx) {
		const { filename, mimetype } = ctx.fileInfo;  
		ctx.set('Content-Type', mimetype);
		ctx.body = fs.createReadStream(`./uploads/${filename}`);
		// ctx.set('Content-Type', 'text/html');
		// ctx.body = fs.createReadStream(`./static/test.html`);
	}
}

module.exports = new FileController();
