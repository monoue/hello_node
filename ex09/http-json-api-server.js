/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2021/01/06 09:10:41 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const error = 'Error: ';
	const argNumError = `${error}Arg num is not one`;
	const queryError = `${error}Invalid query`;
	const queryKeyError = `${error}Key of query must be 'iso'`;
	const pageNotFoundError = '404 not found';

	if (process.argv.length !== 3)
		return console.log(argNumError);

	const http = require('http');
	const URL = require('url').URL;

	const parsetimePath = '/api/parsetime';
	const unixtimePath= '/api/unixtime';

	const port = parseInt(process.argv[2], 10);

	const getParsedTime = date => {
		return {
			hour: date.getUTCHours(),
			minute: date.getUTCMinutes(),
			second: date.getUTCSeconds()
		};
	};

	const getUnixTime = date => {
		return {unixtime: date.getTime()};
	};

	const getJSONTime = (pathname, date) => {
		let arr;

		if (pathname === parsetimePath)
			arr = getParsedTime(date);
		else
			arr = getUnixTime(date);

		return JSON.stringify(arr);
	};

	const serveJSONData = (res, isoString, pathname) => {
			res.writeHead(200, {'Content-Type': 'application/json'});

			const date = new Date(isoString);

			if (isNaN(date))
				return res.end(queryError + '\n');

			const arr = getJSONTime(pathname, date);

			res.end(arr + '\n');
	};

	const showNotFound = res => {
		res.writeHead(404);
		res.end(pageNotFoundError + '\n');
	};

	const server = http.createServer((req, res) => {
		const urlObj = new URL(`http://localhost:${port}${req.url}`);
		const queryData = urlObj.searchParams;
		const isoString = queryData.get('iso');

		if (isoString === undefined || isoString === null)
			return res.end(queryKeyError + '\n');

		const pathname = urlObj.pathname;

		if (pathname === parsetimePath || pathname === unixtimePath)
			serveJSONData(res, isoString, pathname);
		else
			showNotFound(res);
	});

	try {
		server.on('error', err => {
			return console.log(err.message);
		});
		server.listen(port);
	} catch (e) {
		console.log(e.message);
	};
}
