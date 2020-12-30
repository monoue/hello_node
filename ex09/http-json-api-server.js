/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/29 09:52:23 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

	if (process.argv.length != 3)
		return console.log(arg_error);

	const format = num => num.toString().padStart(2, '0');

	const getCurrentDateAndTime = () => {
		const date = new Date();
		const year = date.getFullYear().toString();
		const month = format(date.getMonth() + 1);
		const day = format(date.getDate());
		const hour = format(date.getHours());
		const minute = format(date.getMinutes());

		return `${year}-${month}-${day} ${hour}:${minute}\n`;
	};

	try {
		const server = require('net').createServer(socket => {
			socket.on("error", () => {
				return;
			});
			socket.end(getCurrentDateAndTime());
		});
		server.on("error", () => {
			return;
		});
		server.listen(parseInt(process.argv[2]));
	} catch {
	};
}
