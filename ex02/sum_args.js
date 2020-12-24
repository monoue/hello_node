'use strict'

// const a_or_an = word => {
// 	const c = word[0];

// 	if (c === 'a' || c === 'i' || c === 'u' || c === 'e' || c === 'o')
// 		return ('an');
// 	return ('a');
// }

// const putTypeDescription = target => {
// 	const type = typeof(target);

// 	console.log(target + ' is ' +  a_or_an(type) + ' ' + type + '.')
// }

// putTypeDescription('42');
// putTypeDescription(42);
// putTypeDescription([42]);
// putTypeDescription(new Object());
// putTypeDescription(true);
// putTypeDescription(undefined);
{
	const argv_num = process.argv.length;

	if (argv_num < 3) {
		console.log("Error: No arg");
		return ;
	}

	let	sum = 0;

	for (let i = 2; i < argv_num; i++) {
		sum += parseInt(process.argv[i], 10);
	}
	console.log(sum);
}