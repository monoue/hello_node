'use strict'

{
	const http = require('http');
	const fs = require('fs');
	const ejs = require('ejs');
	const settings = require('./settings'); // .js は合っても良い

	const server = http.createServer();
	const template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf8');

	let n = 0;
	server.on('request', (req, res) => {
		n++;
		const data = ejs.render(template, {
			title: 'hello',
			content: '<strong>World!</strong>',
			n: n
		});
		res.writeHead(200, {'Content-Type': 'text/html'}); // ヘッダー情報を書く
		res.write(data);
		res.end();
	});
	server.listen(settings.port, settings.host); // サーバーを待ち受け状態に
	console.log('server listening ...');
}
