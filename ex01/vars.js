'use strict'

{
	const a_or_an = word => {
		const c = word[0];

		if (c === 'a' || c === 'i' || c === 'u' || c === 'e' || c === 'o')
			return ('an');
		return ('a');
	}

	const putTypeDescription = target => {
		const type = typeof(target);

		console.log(target + ' is ' +  a_or_an(type) + ' ' + type + '.')
	}

	putTypeDescription('42');
	putTypeDescription(42);
	putTypeDescription([42]);
	putTypeDescription(new Object());
	putTypeDescription(true);
	putTypeDescription(undefined);
}