/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/29 08:43:21 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

	if (process.argv.length != 5)
		return console.log(arg_error);

	const fetch = require("node-fetch");

	const httpCollect = async (url) => {
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
