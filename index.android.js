import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainApp from './src/MainApp';

export default class arctic_this_week extends Component {
  render() {
    return (
      <MainApp />
    );
  }
}

AppRegistry.registerComponent('arctic_this_week', () => arctic_this_week);
