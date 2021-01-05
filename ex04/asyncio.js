/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:02:45 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 08:49:22 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const arg_error = 'Error: Arg num is not one';

	if (process.argv.length != 3)
		return console.log(arg_error);

	const fs = require('fs');
	const filePath = process.argv[2];

	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err)
			return console.log(err.message);
		console.log(data.split('\n').length - 1);
	})
}
