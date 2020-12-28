/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 16:12:06 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	import absoluteUrl from "next-absolute-url";

	const arg_error = 'Error: Arg num is not one';

	// if (process.argv.length != 5)
	// 	return console.log(arg_error);

	const fetch = require("node-fetch");

	const httpCollect = async () => {
		try {
			const res = await fetch(process.argv[2]);
			const data = await res.text();
			console.log(`${data.length}\n${data}`);
		} catch (err) {
			return console.log(err.message);
		}
	};
	httpCollect('http://httpbin.org');
	// httpCollect('http://httpbin.org/delay/3');
	// httpCollect('http://httpbin.org/delay/2');
	// httpCollect('http://httpbin.org/delay/1');
	// httpCollect(process.argv[2]);
	// httpCollect(process.argv[3]);
	// httpCollect(process.argv[4]);
}
