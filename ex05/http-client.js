/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http_client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:01:27 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 10:36:16 by monoue           ###   ########.fr       */
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
			res.on('data', chunk => {
				console.log(chunk.toString());
			})
		});
	} catch (err) {
		return console.log(err.message);
	}
}
