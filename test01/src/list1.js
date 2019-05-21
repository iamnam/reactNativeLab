import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const numbers = [1,2,3,4,5];
let listItems = [];

for (const number of numbers) {
	console.log("number: ", number);
	console.log("numbers: ", numbers);
	listItems.push(<li>{number}</li>);
}

const List = () => (<ul>{listItems}</ul>)
// 위의 코드와 아래 코드는 같은 동작을 함 
// function List() {
// 	return< ul>{listItems}</ul> 
// }

ReactDOM.render(
	<List />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
