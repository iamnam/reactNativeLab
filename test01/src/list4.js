import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Blog(props){
	const sidbar = (
		<ul>
			{props.posts.map((post) =>
				<li key={post.id}>{post.title}</li>
			)};
		</ul>
	);

	const content = props.posts.map((post) =>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	);

	return (
		<div>
			{sidbar}
			<hr/>
			{content}
		</div>
	)
}

const posts = [
	{id:1, title:'안녕 리엑트', content:'리엑트 월드에..'},
	{id:2, title:'안녕 리엑트2', content:'리엑트2 월드에..'},
	{id:3, title:'안녕 리엑트3', content:'리엑트3 월드에..'}	
];

ReactDOM.render(
	<Blog posts={posts} />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();