import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { List, ListItem, Text, Thumbnail } from 'native-base';

const styles = StyleSheet.create({
  list: {
    marginLeft: -15,
  },
  thumbnailOpacity: {
    opacity: 0,
  },
  listTitle: {
    fontFamily: 'knile-semibolditalic',
  },
  listContent: {
    fontFamily: 'calendas_plus',
    marginBottom: 5,
  },
  dateAuthor: {
    fontFamily: 'calendas_plus',
    fontSize: 11,
    marginBottom: 5,
    marginTop: -10,
    color: '#858585',
  },
  author: {
    color: '#353535',
    fontFamily: 'calendas_plus',
    fontSize: 11,
  },
});

const {
  listTitle,
  listContent,
  list,
  thumbnailOpacity,
  dateAuthor,
  author,
} = styles;

function NewsList({ post }) {
  return (
    <View>
      <List style={list}>
        <ListItem>
          <Thumbnail style={thumbnailOpacity} />
          <Text style={listTitle}>{post.title.rendered}</Text>
          <Text style={dateAuthor}>Climate & Environment | <Text style={author}>{post.acf.author}</Text></Text>
          <Text style={listContent} note>{post.acf.excerpt}</Text>
        </ListItem>
      </List>
    </View>
  );
}


export default NewsList;
