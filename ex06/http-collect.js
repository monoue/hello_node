/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 16:10:09 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

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
					console.log(`${data.length}\n${data}`);
				});
		}).on('error', err => console.log(err.message));
	} catch (err) {
		return console.log(err.message);
	}
}
