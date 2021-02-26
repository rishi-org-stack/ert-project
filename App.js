import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
// import { NavigationContainer } from '@react-navigation/native';
import Nav from './routes/testStack';
import {Provider} from 'react-redux';

import store from './src/management/store';
export default function App() {
  return (
    <Provider store ={store}>
      <Nav>
      </Nav>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
