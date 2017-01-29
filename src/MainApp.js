import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';
import MenuBar from './components/header';
import AllNews from './views/all-news';
import About from './views/about';
import Test from './components/test';

class MainApp extends Component {


  render() {
    return (
      <View>
        <Animatable.View animation="fadeIn">
          <AllNews />
        </Animatable.View>
      </View>
    );
  }
}

export default MainApp;
