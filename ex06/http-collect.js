/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 10:15:39 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const error = 'Error: ';
	const arg_error = `${error}Arg num is not one`;
	const protocol_error = `${error}https is not supported`;

	if (process.argv.length != 3)
		return console.log(arg_error);

	const url = process.argv[2];

	if (url.substr(0, 5) === 'https')
		return console.log(protocol_error);

	const fetch = require("node-fetch");

	const httpCollect = async () => {
		try {
			const res = await fetch(url);
			const data = await res.text();
			console.log(`${data.length}\n${data}`);
		} catch (err) {
			console.log(err.message);
		}
	};
	httpCollect();
}
