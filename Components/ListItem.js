import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ item }) => {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{item.text}</Text>
				
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
	ListItemView:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'center',

	},
	listItemText:{
		fontSize: 19,

	}

});

export default ListItem;
