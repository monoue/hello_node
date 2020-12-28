/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 10:56:19 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	// error messages
	const err = 'Error: ';
	const arg_error = `${err}Arg num is not one`;

	// when arguments' number is invalid
	if (process.argv.length != 3)
		return console.log(arg_error);

	const http = require("http");

	try {
		http.get(process.argv[2], res => {
			let data = '';
			res
				.on('data', chunk => {
					data += chunk;
				})
				.on('end', () => {
					console.log(`${data.length}\n${data.toString()}`);
					// console.log(`${data.length}\n${data}`);
				});
		});
	} catch (err) {
		return console.log(err.message);
	}
}
