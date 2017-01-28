import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';
import MenuBar from './components/header';
import AllNews from './views/all-news';
import About from './views/about';

class MainApp extends Component {

  static navigationOptions = {
    title: 'The Arctic This Week!',
    header: {
      right: <Text 
      style={{color: 'red'}}>Text
      </Text>,
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Animatable.View animation="fadeIn">
          <AllNews />
        </Animatable.View>
      </View>
    );
  }
}

export default AppShell = StackNavigator({
  Home: { screen: MainApp },
});