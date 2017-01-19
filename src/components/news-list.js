import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text } from 'native-base';

function NewsList() {
  return (
    <View>
      <Text>Test2</Text>
      <List>
        <ListItem >
          <Text>Simon Mignolet</Text>
        </ListItem>
        <ListItem>
          <Text>Nathaniel Clyne</Text>
        </ListItem>
        <ListItem>
          <Text>Dejan Lovren</Text>
        </ListItem>
      </List>
    </View>
  );
}


export default NewsList;
