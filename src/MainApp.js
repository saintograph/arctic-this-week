import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AllNews from './views/all-news';
import About from './views/about';
import Test from './components/test';

class MainApp extends Component {


  render() {
    return (
      <View>
          <AllNews />
      </View>
    );
  }
}

export default MainApp;
