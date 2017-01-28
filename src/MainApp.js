import React, { Component } from 'react';
import { View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';
import MenuBar from './components/header';
import AllNews from './views/all-news';
import About from './views/single-item';

class MainApp extends Component {

  static navigationOptions = {
    title: 'The Arctic This Week',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Animatable.View animation="fadeIn">
          <Button onPress={() => navigate('AboutMe') } 
          title="News"
          />
          <AllNews />
        </Animatable.View>
      </View>
    );
  }
}

export default AppShell = StackNavigator({
  Home: { screen: MainApp },
  AboutMe: { screen: About },
});