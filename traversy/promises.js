const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' },
];

// const getPosts = () => {
// 	setTimeout(() => {
// 		let output = '';
// 		posts.forEach((post, index) => {
// 			output += `<li>${post.title}</li>`;
// 		});
// 		document.body.innerHTML = output;
// 	}, 1000);
// };

// const createPost = post => {
// 	setTimeout(() => {
// 		posts.push(post);
// 	}, 2000);
// }

// const createPost = (post, callback) => {
// 	setTimeout(() => {
// 		posts.push(post);
// 		callback();
// 	}, 2000);
// }

// const createPost = post => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			posts.push(post);

// 			const error = false;

// 			if (!error) {
// 				resolve();
// 			} else {
// 				reject('Error: Something went wrong');
// 			}
// 		}, 2000);
// 	});
// }

// createPost({ title: 'Post Three', body: 'This is port three' })
// 	.then(getPosts)
// 	.catch(err => console.log(err));
const fetch = require("node-fetch");

const fetchUsers = async () => {
	// const res = await fetch('http://jsonplaceholder.typicode.com/users');	
	const res = await fetch(process.argv[2]);	

	// const data = await res.json();
	const data = await res.text();

	console.log(data)
}

fetchUsers();
// const init = async () => {
// 	await createPost({ title: 'Post Three', body: 'This is port three' });

// 	getPosts();
// }

// init();


// // Promise all
// const promise1 = Promise.resolve('Hello World');
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 2000, 'Goodbye');
// });
// fetch も Promise を返す…！
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));