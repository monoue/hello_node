'use strict'

{
	const posts = [
		{
			text: 'JavaScriptの勉強中…',
			likeCount: 0,
			show: () => {
				console.log('hoge');
			}
		},
	];

	//   function show(post) {
	// 	console.log(`${post.text} - ${post.likeCount}いいね`);
	//   }
	posts[0].show();

	//   show(posts[0]);


}