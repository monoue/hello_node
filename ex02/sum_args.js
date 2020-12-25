'use strict'

{
	const argv_num = process.argv.length;

	if (argv_num < 3) {
		console.log("No arguments");
		return;
	}

	let	sum = 0;

	for (let i = 2; i < argv_num; i++) {
		sum += parseInt(process.argv[i], 10);
	}
	console.log(sum);
}