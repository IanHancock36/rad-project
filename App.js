import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Header from './Components/Header';


const App = () => {
	return (
		<View style={styles.container}>
			<Header />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
    paddingTop: 60, 

	}
});

export default App;
