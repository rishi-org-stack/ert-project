import React from 'react';
import { 
    StyleSheet,
    Text, 
    View ,TextInput
} from 'react-native';

export default function Input(props) {
  return (
    <View style ={styles.box}>
        <TextInput 
        // placeholder= 
        style = {styles.input}>
            <Text style ={
                styles.text
            }>
                {props.name}
            </Text>
        </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:"blue",
        width:330,
        height:55,
        marginLeft:37,
        borderRadius:25,
        borderColor:"white",
        marginBottom:20,
    },
    input:{
        textAlign:'center',
        width:330,
        height:55,
        borderRadius:25,
        
        
    },
    text:{
        fontSize:20,
        color:"white",
        fontFamily:"sans-serif-medium",
    }
});
