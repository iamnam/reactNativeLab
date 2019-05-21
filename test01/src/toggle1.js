import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {isToggleOn:true};
		// bind 아주 중요 
		// this.handleClick = this.handleClick.bind(this);
	}
	// 최신 문법을 사용하면 위의 bind 코드가 없어도 this 가 넘어간다. 
	handleClick = () => {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
		console.log('this is:', this.state.isToggleOn);
		console.log(this);
	}
	render(){
		return (
			<button onClick={this.handleClick}>
			{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>	
		);	
	}
}

ReactDOM.render(
	<Toggle />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
