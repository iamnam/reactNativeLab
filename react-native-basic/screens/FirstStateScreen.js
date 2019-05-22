import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

class Blink extends Component{
	constructor(props){
		super(props);
		this.state={isShowingText:true};

		setInterval(() => (
			this.setState(previousState => (
				{isShowingText:!previousState.isShowingText}
			))
		), 1000);
	}

	render(){
		if(!this.state.isShowingText){
			return null;
		}

		return(
			<Text>
				{this.props.text}
			</Text>
		)
	}
}

export default class BlinkApp extends Component{
	render(){
		return (
			<View style={{alignItems:'center',top:50}}>
				<Blink text='블링크데스트'/>
				<Blink text='---------'/>
				<Blink text='깜빡깜빡'/>
				<Blink text='iamnam'/>
			</View>
		)
	}
}