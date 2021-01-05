/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:02:38 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 08:48:21 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

	if (process.argv.length != 3)
		return console.log(arg_error);

	const fs = require('fs');
	const filePath = process.argv[2];
	let fileString;

	try {
		fileString = fs.readFileSync(filePath, 'utf8');
	} catch (e) {
		return console.log(e.message);
	}

	let br_num = 0;

	for (let i = 0; i < fileString.length; i++)
	{
		if (fileString[i] === '\n')
			br_num++;
	}
	console.log(br_num);
}
