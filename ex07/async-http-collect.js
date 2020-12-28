/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 16:38:14 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{

	const arg_error = 'Error: Arg num is not one';

	// if (process.argv.length != 5)
	// 	return console.log(arg_error);

	const fetch = require("node-fetch");

	const httpCollect = async (url) => {
		try {
			// const res = await fetch(process.argv[2]);
			const res = await fetch(url);
			const data = await res.text();
			console.log(`${data.length}\n${data}`);
		} catch (err) {
			return console.log(err.message);
		}
	};
	// const httpCollect = async () => {
	// 	try {
	// 		const res = await fetch(process.argv[2]);
	// 		const data = await res.text();
	// 		console.log(`${data.length}\n${data}`);
	// 	} catch (err) {
	// 		return console.log(err.message);
	// 	}
	// };
	// httpCollect('http://www.google.co.jp');
	httpCollect('http://httpbin.org/delay/3')
	.then(httpCollect('http://httpbin.org/delay/2'))
	.then(httpCollect('http://httpbin.org/delay/1'));
	// httpCollect(process.argv[2]);
	// httpCollect(process.argv[3]);
	// httpCollect(process.argv[4]);
}
