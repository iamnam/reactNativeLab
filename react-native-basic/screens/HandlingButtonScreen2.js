import React,{Component} from 'react';
import {Alert,AppRegistry,Platform,StyleSheet,View,Text,
TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,
TouchableWithoutFeedback} from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop:16,
		alignItems:'center'
	},
	button:{
		marginBottom:30,
		width:260,
		alignItems:'center',
		backgroundColor:'#2196F3'
	},
	buttonText:{
		padding:20,
		fontWeight:'bold',
		color:'white'
	}
});

export default class Touchable extends Component{
	_onPressButton(){
		Alert.alert('You tapped the button!')
	}

	_onLongPressButton(){
		Alert.alert('You long-Pressed the button!')
	}

	render(){
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={this._onPressButton} underlayColor="yellow">
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableHighlight</Text>
					</View>
				</TouchableHighlight>
				<TouchableOpacity onPress={this._onPressButton}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableOpacity</Text>
					</View>
				</TouchableOpacity>
				<TouchableNativeFeedback
				onPress={this._onPressButton}
				background={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground():''}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableNativeFeedback</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableWithoutFeedback 
				onPress={this._onPressButton}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableHighlight 
				onPress={this._onPressButton}
				onLongPress={this._onLongPressButton}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Touchable with Long Press</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}