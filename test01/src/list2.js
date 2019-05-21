import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function NumberList(props){
	const numbers = props.numbers;
	const listItems = numbers.map((number) => 
		(<li>{number}</li>)
	);
	return (<li>{number}</li>);
} 
const numbers = [6,7,8,9,0];

ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
