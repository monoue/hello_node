/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 17:13:33 by monoue           ###   ########.fr       */
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
			console.log(`${data.length}\n${data}`);
		} catch (err) {
			return console.log(err.message);
		}
	};

	const exec_three_funcs_in_order = async () => {
		await httpCollect(process.argv[2]);
		await httpCollect(process.argv[3]);
		httpCollect(process.argv[4]);
	};

	exec_three_funcs_in_order();
}
