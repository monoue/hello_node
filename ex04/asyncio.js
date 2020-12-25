'use strict'

{
	// error messages
	const err = 'Error: ';
	const arg_error = `${err}Arg num is not one`;
	const path_error = `${err}No such file: `;

	// when arguments` number is invalid
	if (process.argv.length != 3)
	{
		console.log(arg_error);
		return;
	}

	const fs = require('fs');
	const filePath = process.argv[2];

	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.log(err.message); // これで良いなら上の方のエラーメッセージ削る
			return;
		}
		console.log(data.split('\n').length - 1);
	})
	// fs.readFile(filePath, 'utf8', (err, data) => {
	// 	if (err) {
	// 		console.log(path_error + filePath)
	// 		return ;
	// 	}
	// 	console.log(data.split('\n').length - 1);
	// })
}