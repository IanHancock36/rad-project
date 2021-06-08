import React,{useState} from 'react';
import { StyleSheet, View, Text, Image ,FlatList } from 'react-native';
import Header from './Components/Header';
import AddItem from './Components/AddItem'; 
import ListItem from './Components/ListItem'
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const[items , setItems]= useState([
    {id: uuidv4(), text:'Soda' },
    {id: uuidv4(), text:'Eggs' },
    {id: uuidv4(), text:'Juice' },
    {id: uuidv4(), text:'Soda' },

  ])
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

	return (
		<View style={styles.container}>
			<Header title='Shopping List' />
      <AddItem />

      <FlatList 
      data={items} 
      renderItem ={({item}) => (
      
      <ListItem item={item} 
      deleteItem={deleteItem}
      />
      )}
    />
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
