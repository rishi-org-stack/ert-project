import React from 'react';
import { 
    StyleSheet,
    Text, 
    View ,TouchableOpacity
} from 'react-native';

export default function Button (props){
    return(
        <View style ={styles.box}>
            <TouchableOpacity onPress={()=>{console.log("uop")}}>
                <Text 
                    style ={styles.text}
                >
                {props.button}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonbox:{
        backgroundColor:"#3a2a73",
        width:150,
        height:50,
        marginLeft:120,
        marginTop:30,
        borderRadius:30,
    },
    text:{
        textAlign:'center',
        marginTop:10,
        color:"#0ca630",
        fontSize:20,
    }
})