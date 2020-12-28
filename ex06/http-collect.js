/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 10:39:10 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 16:41:18 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

	if (process.argv.length != 3)
		return console.log(arg_error);

	const fetch = require("node-fetch");

	const httpCollect = async () => {
		try {
			const res = await fetch(process.argv[2]);
			const data = await res.text();
			console.log(`${data.length}\n${data}`);
		} catch (err) {
			return console.log(err.message);
		}
	};
	httpCollect();
}
