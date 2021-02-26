
import React, { useState } from 'react';
import {
  StyleSheet
  , Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';



function Createpost(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // console.log(props);
  return (
    <View style={styles.container}>
        <Text>CreatePost</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: "blue",
    width: 330,
    height: 55,
    marginLeft: 37,
    borderRadius: 25,
    borderColor: "white",
    marginBottom: 20,
  },
  input: {
    textAlign: 'center',
    width: 330,
    height: 55,
    borderRadius: 25,


  },
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "sans-serif-medium",
  },
  buttonbox: {
    backgroundColor: "#3a2a73",
    width: 150,
    height: 50,
    marginLeft: 120,
    marginTop: 30,
    borderRadius: 30,
  },
  buttontext: {
    textAlign: 'center',
    marginTop: 10,
    color: "#0ca630",
    fontSize: 20,
  }

});

export default Createpost;