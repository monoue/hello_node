/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   vars.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: monoue <monoue@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/28 05:02:30 by monoue            #+#    #+#             */
/*   Updated: 2021/01/05 08:46:28 by monoue           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict'

{
	const a_or_an = word => {
		const c = word[0];

		if (c === 'a' || c === 'i' || c === 'u' || c === 'e' || c === 'o')
			return ('an');
		return ('a');
	}

	const putTypeDescription = target => {
		const type = typeof target;

		console.log(`${target} is ${a_or_an(type)} ${type}.`);
	}

	putTypeDescription('42');
	putTypeDescription(42);
	putTypeDescription([42]);
	putTypeDescription({});
	putTypeDescription(true);
	putTypeDescription(undefined);
}
