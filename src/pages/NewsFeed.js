

import React, { useState } from 'react';
import {
  StyleSheet
  , Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';

function Info(props) {
    
    // console.log(props)
    return (
        <View style = {styles.container}>
          <Text>News Feed</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  info:{
    // marginLeft:30,
    alignItems:'center',
  },
  infotext:{
    marginBottom:20,
    color:"red",
    fontSize:20,
  },
  logout:{
    backgroundColor:"grey",
    width:150,
    height:50,
    borderRadius:30,
    alignItems:'center'
  },
  logouttext:{
    marginTop:10,
    fontSize:20,
    color:'green'
  }
});


export default Info;