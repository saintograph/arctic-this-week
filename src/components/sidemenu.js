import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';

export default function SideMenu() {
  function drawerFunction() {
    Actions.refresh({ key: 'drawer', open: value => !value });
  }
  return (
    <View>
      <Text onPress={Actions.about1}>About</Text>
      <Text onPress={Actions.contact}>Contact</Text>
    </View>
  );
}
