import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AllNews from './views/all-news';

const MainApp = () => {
  return (
    <View>
      <AllNews />
    </View>
  );
};

export default MainApp;
