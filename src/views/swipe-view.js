import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import SingleItem from './single-item';
import Test from '../components/test';

export default class SwipeView extends Component {
  render() {
    return (
      <Swiper
        index={0}
        loop={false}
      >
        <View><SingleItem /></View>
        <View><Test /></View>
      </Swiper>
    );
  }
}
