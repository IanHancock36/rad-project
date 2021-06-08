import React,{useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
const AddItem = ({addItem}) => {
    const [text, setText]= useState('')
    const onChange =textValue => {
        setText(textValue)
    }
    return (
     
            <View>
                <TextInput 
                placeholder='Add Something'
                style={styles.input}
                onChangeText={onChange}
                value = {text}

                
                />
                <TouchableOpacity style ={styles.button} >
                    <Text style = {styles.buttonText}>
                    <FontAwesome name="plus-square" size={24} color="black" />
                    Add Item
                    </Text>

                </TouchableOpacity>

          

            </View>
            
     
    )
}

const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 8,
        margin: 5, 
    },
    button:{
        backgroundColor: 'green',
        padding: 9,
        margin: 5,
    },
    buttonText:{
        color: 'blue',
        fontSize: 20, 
        textAlign: 'center'
    },

}); 

export default AddItem
