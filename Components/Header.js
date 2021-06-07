import React from 'react'
import {StyleSheet, View ,Text  } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Hey JOE  </Text>
   
    </View>
  );
}
 const styles = StyleSheet.create({
   header :{
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    
  },
  text: {
      color: '#fff',
      fontSize: 23, 
    textAlign:'center'
  }
 
 })

export default Header;