import React,{Component} from 'react';
import {FlatList,StyleSheet,Text,View} from 'react-native';

export default class FlatListBasics extends Component {
	render(){
		return (
			<View style={StyleSheet.container}>
				<FlatList 
				data={data}
				renderItem={({item}) => {
					console.log(item.key);
					return (
						<Text style={styles.item}>{item.key}</Text>
					)}
				}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		paddingTop:22
	},
	item:{
		padding:10,
		fontSize:18,
		height:44,
	}
});

const data = [
	{key:'Devin'},
	{key:'Jackson'},
	{key:'James'},
	{key:'Joel'},
	{key:'John'},
	{key:'Jillian'},
	{key:'Jimmy'},
	{key:'Julie'},
	{key:'2Devin'},
	{key:'2Jackson'},
	{key:'2James'},
	{key:'2Joel'},
	{key:'2John'},
	{key:'2Jillian'},
	{key:'2Jimmy'},
	{key:'2Julie'},
	{key:'3Devin'},
	{key:'3Jackson'},
	{key:'3James'},
	{key:'3Joel'},
	{key:'3John'},
	{key:'3Jillian'},
	{key:'3Jimmy'},
	{key:'3Julie'}
];