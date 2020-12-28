/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:02:34 by monoue            #+#    #+#             */
/*   Updated: 2020/12/28 09:04:30 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const argv_num = process.argv.length;

	if (argv_num < 3) {
		return console.log("No arguments");
	}

	let	sum = 0;

	for (let i = 2; i < argv_num; i++) {
		sum += parseInt(process.argv[i], 10);
	}
	console.log(sum);
}