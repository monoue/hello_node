'use strict'

{
	const err = 'Error: ';
	const arg_error = `${err}Arg num is not one`;
	const path_error = `${err}No such file: `;

	// if (process.argv.length != 3)
	// {
	// 	console.log(arg_error);
	// 	return ;
	// }
	function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
	httpGet("https://profile.intra.42.fr/");


	// const fs = require('fs');
	// const filePath = process.argv[2];

	// fs.readFile(filePath, 'utf-8', (err, data) => {
	// 	if (err) {
	// 		console.log(path_error + filePath)
	// 		return ;
	// 	}
	// 	console.log(data.split('\n').length - 1);
	// })
}