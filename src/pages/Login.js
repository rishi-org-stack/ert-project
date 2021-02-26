
import React, { useState } from 'react';
import {
  StyleSheet
  , Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';
import { Validate } from '../data/user';
import { connect } from 'react-redux';
import { make } from '../util/util';
import { two } from '../data/urls';
import { logindata } from '../data/data';
import { log } from 'react-native-reanimated';

function Login(props) {

  const [name, setName] = useState('')
  const [password, setEmail] = useState('')
  // console.log(props);
  return (
    <View style={styles.container}>

      {/* View for Name Input */}
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText={text => { setName(text) }}
        >
          <Text style={
            styles.text
          }>
            Name
          </Text>
        </TextInput>
      </View>

      {/* View for Email Input */}
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText={text => { setEmail(text) }}

        >
          <Text style={
            styles.text
          }>
            Password
          </Text>
        </TextInput>
      </View>

      {/* View for Button */}
      <View style={styles.buttonbox}>

        <TouchableOpacity
          onPress={() => {
            let data = {
              name: make(name),
              password: make(password),
            };
            let fdata = logindata(data);
            fetch(two, {
              method: "POST",
              body: fdata,
            })
              .then(response => response.json())
              .then(d => {
                if (d.api_status===200){
                  console.log(d);
                  props.changeIt(data.name);
                  props.navigation.navigate("Info");
                }else{
                  props.navigation.navigate("Register");
                  alert("you are not registered")
                };
              });
          }}
        >
          <Text
            style={styles.buttontext}
          >
            login
          </Text>
        </TouchableOpacity>

      </View>

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
const mapDispatchToProps = (dispatch) => {
  return {
    changeIt: (name) => {
      dispatch({ type: "CHANGE_IT", payload: name })
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);