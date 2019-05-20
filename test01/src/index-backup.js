import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 여러 태크는 하나로 감싸서 사용해야 함(div로) 
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
	if (user) {
	  return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger.</h1>;
  }

const user = {
  firstName: 'Sungwon',
  lastName: 'Nam'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  getGreeting(user),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
