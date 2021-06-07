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
    listItem
});

export default ListItem;
