import React,{Component} from 'react';
import {FlatList,ActivityIndicator,Text,View} from 'react-native';

export default class FetchExample extends React.Component {
	constructor(props){
		super(props);
		this.state={isLoading:true}
	}

	async componentDidMount(){
		try {
			const response = await fetch('https://facebook.github.io/react-native/movies.json');
			const responseJson = await response.json();
			console.log(responseJson);
			this.setState({
				isLoading:false,
				dataSource:responseJson.movies
			})
		} catch(error) {
			console.error(error);
		}
	}

	render(){
		if(this.state.isLoading){
			return(
				<View style={{flex:1,padding:20}}>
					<ActivityIndicator/>
				</View>
			);
		}

		return(
			<View style={{flex:1,paddingTop:20}}>
				<FlatList
					data={this.state.dataSource}
					renderItem={({item}) => <ItemComponent item={item}/>}
					keyExtractor={({id},index) => id}
				/>
			</View>
		);
	}
}

const ItemComponent=(props)=>{
	return (
		<Text style={{fontSize:40}}>
			{props.item.title},{props.item.releaseYear}
		</Text>
	);
}