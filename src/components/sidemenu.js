import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  menuItemContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#e1e1e1',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    marginLeft: 50,
    fontFamily: 'knile-semibold',
    fontSize: 16,
    flex: 5,
  },
  menuIcon: {
    height: 30,
    width: 30,
    marginLeft: 15,
    alignSelf: 'flex-start',

  },
});

const { menuItem, menuItemContainer, menuIcon } = styles;

export default function SideMenu() {
  function drawerFunction() {
    Actions.refresh({ key: 'drawer', open: value => !value });
  }
  return (
    <View>
      <TouchableOpacity onPress={Actions.about}>
        <View style={menuItemContainer}>
          <Image
            style={menuIcon}
            source={require('../images/about.png')}
          />
          <Text style={menuItem}>About</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={Actions.contact}>
        <View style={menuItemContainer}>
          <Image
            style={menuIcon}
            source={require('../images/message.png')}
          />
          <Text style={menuItem}>Contact</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
