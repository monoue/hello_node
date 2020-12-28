/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:02:38 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 09:07:16 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	// error messages
	const err = 'Error: ';
	const arg_error = `${err}Arg num is not one`;

	// when arguments` number is invalid
	if (process.argv.length != 3)
		return console.log(arg_error);

	const fs = require('fs');
	const filePath = process.argv[2];
	let fileBuffer;

	try {
		fileBuffer = fs.readFileSync(filePath);
	} catch (e) {
		return console.log(e.message);
	}

	const fileString = fileBuffer.toString();
	let br_num = 0;

	for (let i = 0; i < fileString.length; i++)
	{
		if (fileString[i] === '\n')
			br_num++;
	}
	console.log(br_num);
}
