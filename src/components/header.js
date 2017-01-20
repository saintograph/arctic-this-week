import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Header, Button, Title, Icon } from 'native-base';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  headerMain: {
    backgroundColor: '#ffffff',
  },
  icons: {
    color: '#000000',
  },
  headerTitle: {
    fontFamily: 'knile-semibold',
    color: '#000000',
  },
});

const { headerTitle, headerMain, icons } = styles;

function MenuBar() {
  return (
    <Header style={headerMain}>
      <Button transparent>
        <Icon name="ios-arrow-back" style={icons} />
      </Button>
      <Title style={headerTitle}>Arctic This Week</Title>
      <Button transparent>
        <Icon name="ios-menu" style={icons} />
      </Button>
    </Header>
  );
}

export default MenuBar;
