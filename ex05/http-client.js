/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:01:27 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 15:44:20 by monoue           ###   ########.fr       */
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
			res.on('data', chunk => {
				console.log(chunk.toString());
			})
		}).on('error', err => console.log(err.message));
	} catch (err) {
		return console.log(err.message);
	}
}
