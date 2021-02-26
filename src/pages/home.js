
import React, { useState } from 'react';
import {
    StyleSheet
    , Text,
    View,
    Dimensions,
    TextInput, TouchableOpacity
} from 'react-native';
import Input from '../components/InputBox'
import Button from '../components/Button'
import Validate from '../data/user'

const change = (state, data) => {
    state.name = data.name
    state.email = data.email
}
export default function Home(props) {
    const gotologin = () => {
        props.navigation.navigate('Login')
    }
    const gotoregister = () => {
        props.navigation.navigate('Register')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style ={styles.haedertext} numberOfLines ={2}>Error Technologies</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.inputcontainer}>

                        <TouchableOpacity onPress={gotoregister} style={styles.inputbox}>
                            <Text style = {styles.inputtext}>
                                Register
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotologin} style={styles.inputbox}>
                            <Text style = {styles.inputtext}>
                                Login
                            </Text>
                        </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const { height } = Dimensions.get('screen')
const { width } = Dimensions.get('screen')
const headh = (height * 2) / 3;
const footh = (height) / 3;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        backgroundColor: "blue",
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: headh,
    },
    haedertext:{
        color:"white",
        fontSize:30,
        // : ,
        // fontFamily:'lucida grande',
    },
    footer: {
        height: footh,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    inputbox: {
        backgroundColor: "grey",
        width: width / 3,
        height: footh / 4,
        borderRadius:30,
        marginRight:20
    },
    inputtext:{
        color:"white",
        textAlign:'center',
        marginTop:width/19,
        fontSize:20
    },
    inputcontainer:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        marginTop:20,
    }
});
