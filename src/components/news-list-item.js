import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  list: {
    marginLeft: -15,
  },
  thumbnailOpacity: {
    opacity: 0,
  },
  listTitle: {
    fontFamily: 'knile-semibolditalic',
    fontSize: 24,
    paddingBottom: 5,
  },
  listContent: {
    fontFamily: 'calendas_plus',
    marginBottom: 5,
  },
  dateAuthor: {
    fontFamily: 'calendas_plus',
    fontSize: 11,
    // marginBottom: -10,
    marginTop: -5,
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

function NewsListItem({ post }) {
  let category;
  if (post.categories == 3) {
    category = "Defense and Security";
  } else if (post.categories == 4) {
    category = "Climate and Environment";
  } else if (post.categories == 5) {
    category = "Indigenous Rights and Issues";
  } else if (post.categories == 6) {
    category = "Law and Governance";
  } else if (post.categories == 7) {
    category = "Natural Resources and Energy";
  } else if (post.categories == 8) {
    category = "Politics and Strategy";
  } else if (post.categories == 9) {
    category = "Shipping and Economics";
  } else if (post.categories == 10) {
    category = "Society and Culture";
  } else {
    category = "General News";
  }

  return (
    <View>
      <Text style={listTitle}>{post.title.rendered}</Text>
      <Text style={dateAuthor}>{category} | <Text style={author}>{post.acf.author}</Text></Text>
      <Text style={listContent} note>{post.acf.excerpt}</Text>
    </View>
  );
}


export default NewsListItem;
