'use strict'

{
	const err = 'Error: ';
	const arg_error = `${err}Arg num is not one`;
	const path_error = `${err}No such file: `;

	if (process.argv.length != 3)
	{
		console.log(arg_error);
		return ;
	}

	const fs = require('fs');
	const filePath = process.argv[2];
	let fileBuffer;
	try {
		fileBuffer = fs.readFileSync(filePath);
	// } catch (e) {
	// 	console.log(path_error + filePath)
	// 	return ;
	} catch (_) {
		console.log(path_error + filePath)
		return ;
	}
	const fileString = fileBuffer.toString();
	let br_num = 0;
	for (let i = 0; i < fileString.length; i++)
	{
		if (fileString[i] === '\n')
			br_num++;
	}
	console.log(br_num);
}