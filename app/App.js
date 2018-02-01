/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage
} from 'react-native';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import MyNavigator from './router';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {

  }

  render() {
    return (
      <MyNavigator></MyNavigator>
    );
  }
}

function mapStateToProps(state) {
  return {
    userName: state.loginReducer.userName
  }
};

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
