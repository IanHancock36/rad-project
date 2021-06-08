import {Ionicons} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, } from 'react-native';

const ListItem = ({ item,  deleteItem,}) => {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{item.text} </Text>
				<FontAwesome name="remove" size={20} color="red"
				  onPress={() => deleteItem(item.id)}
				  />
	
				
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	listItem: {
		padding: 15,
		backgroundColor: '#f9f9f9',
		borderBottomWidth: 1,
		borderColor: '#eee',
	},
	listItemView:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'center',

	},
	listItemText:{
		fontSize: 19,

	},
	iconView:{
		flexDirection:'row',
		justifyContent:'space-evenly',
		width: 70,
	}

});

export default ListItem;
