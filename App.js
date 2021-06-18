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
        // want to return an array with original items + the new object to that array so must add an {} object.       const addItem = item => {
        const addItem = text =>{
        setItems(prevItems => {
          return [{id:uuidv4(), text }, ...prevItems]
        })
      }
  return (
    <View style={styles.container}>
    <Header title='Shopping List' />
    <AddItem addItem={addItem}/>

    <FlatList 
    data={items} 
    renderItem ={({item}) => (
    
    <ListItem item={item} 
    deleteItem={deleteItem}
    />
    )}
  />
  </View>
   
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    paddingTop: 60, 

	}
});

export default App

