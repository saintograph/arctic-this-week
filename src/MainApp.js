import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MenuBar from './components/header';
import HeroImage from './components/hero-image';
import NewsList from './components/news-list';

const imageUrl = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';

export default class MainApp extends Component {
  render() {
    return (
      <View>
        <MenuBar />
        <Animatable.View animation="fadeIn">
          <HeroImage imageUrl={imageUrl} />
          <NewsList />
        </Animatable.View>
      </View>
    );
  }
}
