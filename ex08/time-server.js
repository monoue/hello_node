/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 10:58:54 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

	if (process.argv.length != 3)
		return console.log(arg_error);

	require('date-utils');

	try {
		const server = require('net').createServer(socket => {
			socket.on('error', err => {
				return console.log(err.message);
			});
			const date = new Date();
			const formatted = date.toFormat('YYYY-MM-DD HH24:MI');
			socket.end(formatted + '\n');
		});
		server.on('error', err => {
			return console.log(err.message);
		});

		server.listen(parseInt(process.argv[2]));
	} catch (e) {
		console.log(e.message);
	};
}
