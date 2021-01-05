/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 16:21:54 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const error = 'Error: ';
	const arg_num_error = `${error}Arg num is not one`;
	const arg_content_error = `${error}Invalid arg format`;
	const query_num_error = `${error}Num of queries should be one`;
	const query_key_error = `${error}Key of query must be 'iso'`;

	const parsetime_path = '/api/parsetime'
	const unixtime_path= '/api/unixtime'

	if (process.argv.length !== 3)
		return console.log(arg_num_error);

	const http = require('http');
	const URL = require('url').URL;
	const port = parseInt(process.argv[2], 10);

	const get

	const getJSONTime = (pathname, date) => {
		if (pathname === parsetime_path)
			return getJSONParsedTime(date);
		else
			return getJSONUnixTime(date);
	};

	const server = http.createServer((req, res) => {
		const urlObj = new URL(`http://localhost:${port}${req.url}`);
		const queryData = urlObj.searchParams;
		const isoString = queryData.get('iso');

		if (isoString === undefined)
			return console.log(query_key_error);

		const pathname = urlObj.pathname;

		if (pathname === parsetime_path || pathname === unixtime_path)
		{
			res.writeHead(200, {'Content-Type': 'application/json'});
			const date = new Date(isoString);
			let arr;
			if (pathname === parsetime_path)
			{
				arr = {
					hour: date.getUTCHours(),
					minute: date.getUTCMinutes(),
					second: date.getUTCSeconds()
				};
			}
			else
				arr = {unixtime: date.getTime()};
			res.end(JSON.stringify(arr));
		}
		else
		{
			res.writeHead(404);
			res.end('404 not found');
		}
	});

	server.listen(port);
}
