const array = ['42', 42, [42], new Object(), true, undefined];
const putMessage = (target, article) => console.log(target + ' is ' + article + ' ' + typeof(target) + '.');

putMessage(array[0], 'a');
putMessage(array[1], 'a');
putMessage(array[2], 'an');
putMessage(array[3], 'an');
putMessage(array[4], 'a');
putMessage(array[5], 'an');