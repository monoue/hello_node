/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 10:28:05 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const error = 'Error: ';
	const arg_error = `${error}Arg num is not three`;
	const protocol_error = `${error}https is not supported`;

	if (process.argv.length != 5)
		return console.log(arg_error);

	const fetch = require("node-fetch");

	const httpCollect = async (url) => {
		if (url.substr(0, 5) === 'https')
			return console.log(protocol_error);
		try {
			const res = await fetch(url);
			const data = await res.text();
			console.log(data);
		} catch (err) {
			return console.log(err.message);
		}
	};

	const execThreeInOrder = async () => {
		await httpCollect(process.argv[2]);
		await httpCollect(process.argv[3]);
		httpCollect(process.argv[4]);
	};

	execThreeInOrder();
}
