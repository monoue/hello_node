/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:01:27 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 09:09:28 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

	if (process.argv.length != 3)
		return console.log(arg_error);

	const http = require('http');

	try {
		// callback is called when the connection is established
		http.get(process.argv[2], res => {
			res.setEncoding('utf8');
			res.on('data', chunk => {
				console.log(chunk);
			})
		}).on('error', err => console.log(err.message));
	} catch (err) {
		return console.log(err.message);
	}
}
