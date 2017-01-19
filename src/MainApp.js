import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeroImage from './components/hero-image';


const imageUrl = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';

export default class MainApp extends Component {
  render() {
    return (
      <View>
        <HeroImage imageUrl={imageUrl} />
        <Text>Test2</Text>
      </View>
    );
  }
}
