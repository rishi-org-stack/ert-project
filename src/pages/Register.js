
import React, { useState } from 'react';
import {
  StyleSheet
  , Text,
  View,
  TextInput, TouchableOpacity
} from 'react-native';

import {Adduser} from '../data/user';
import {connect} from 'react-redux';
import {make} from "../util/util";
import {one} from '../data/urls';
import { registerdata } from '../data/data'
function Register(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setCp] = useState('')
  return (
    <View style={styles.container}>

      {/* View for Name Input */}
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText ={text=>{setName(text)}}
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
          onChangeText ={text=>{setEmail(text)}}
          >
          <Text style={
            styles.text
          }>
            Email
          </Text>
        </TextInput>
      </View>

      {/* input for password */}
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText ={text=>{setPassword(text)}}
          >
          <Text style={
            styles.text
          }>
            Password
          </Text>
        </TextInput>
      </View>


      {/* confirm password */}
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          onChangeText ={text=>{setCp(text)}}
          >
          <Text style={
            styles.text
          }>
            confirm Password
          </Text>
        </TextInput>
      </View>


      {/* View for Button */}
      <View style={styles.buttonbox}>

        <TouchableOpacity 
          onPress={() => {let data ={
            name:make(name),
            email:make(email),
            password:make(password),
            confirm_password:make(confirm_password),
          };
          let fdata =registerdata(data);
          fetch(one, {
              method: "POST",
              body: fdata,
            })
              .then(response => response.json())
              .then(d => {
                if (d.api_status===200){
                  console.log("yes");
                  props.changeIt(data.name);
                  props.navigation.navigate("Info");
                }else{
                  console.log(d)
                  props.navigation.navigate("Register");
                  alert("you are not registered")
                };
              });
          //;if(Adduser(data) ==="ok"){
          //   props.navigation.navigate('Login');
          // };if(Adduser(data) ==='already present'){
          //   props.changeIt(data);
          //   props.navigation.navigate('Info');
          // }; 
          }}
        >
          <Text
            style={styles.buttontext}
          >
            Register
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
    backgroundColor: "red",
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

const mapDispatchToProps =(dispatch)=>{
  return{
    changeIt :(data) =>{
      dispatch({type:"CHANGE_IT",payload:data})
    }
  }
}

export default connect(null,mapDispatchToProps)(Register);