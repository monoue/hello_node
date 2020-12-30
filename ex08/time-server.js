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
	// const arg_error = 'Error: Arg num is not one';

	// if (process.argv.length != 3)
	// 	return console.log(arg_error);

	const server = require('net').createServer(socket => {
		socket.write("hoge");
		socket.end();
	});

	// server.on('connection', socket => {
	// 	// socket.on('data', data => {
	// 	// 	socket.write(data);
	// 	// });
	// 	const d = new Date();
	// 	console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日 ${d.getMinutes()} ${d.getSeconds()}`);


	// });

	// server.listen(8000, () => console.log('server bound'));
	server.listen(parseInt(process.argv[2], 10));
}
