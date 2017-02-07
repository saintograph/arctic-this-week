import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f3f3f3',
    paddingTop: 50,
    paddingBottom: 50,
    height,
  },
  category: {
    fontFamily: 'calendas_plus',
    color: '#99180d',
    fontSize: 14,
    marginBottom: 12,
  },
  titleHeadingContainer: {
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleHeading: {
    fontSize: 36,
    fontFamily: 'knile-semibold',
    color: '#1c1c1e',
  },
  readingTime: {
    fontFamily: 'calendas_plus',
    paddingTop: 5,
    fontSize: 14,
  },
  mainContent: {
    marginTop: 25,
    marginBottom: 35,
    fontSize: 16,
    fontFamily: 'calendas_plus',
    color: '#353535',
  },
  quote: {
    fontSize: 24,
    fontFamily: 'knile-semibold',
    color: '#1c1c1e',
    paddingTop: 15,
  },
  referenceTitle: {
    fontSize: 21,
    fontFamily: 'knile-semibold',
    color: '#1c1c1e',
    marginTop: 5,
  },
  references: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'calendas_plus',
    color: '#99180d',
  },
});

const {
  mainView,
  category,
  titleHeadingContainer,
  titleHeading,
  readingTime,
  mainContent,
  quote,
  referenceTitle,
  references,
} = styles;

export default function SingleItem({ post }) {
  let categoryNews;
  if (post.categories[0] === 3) {
    categoryNews = 'Defense and Security';
  } else if (post.categories[0] === 4) {
    categoryNews = 'Climate and Environment';
  } else if (post.categories[0] === 5) {
    categoryNews = 'Indigenous Rights and Issues';
  } else if (post.categories[0] === 6) {
    categoryNews = 'Law and Governance';
  } else if (post.categories[0] === 7) {
    categoryNews = 'Natural Resources and Energy';
  } else if (post.categories[0] === 8) {
    categoryNews = 'Politics and Strategy';
  } else if (post.categories[0] === 9) {
    categoryNews = 'Shipping and Economics';
  } else if (post.categories[0] === 10) {
    categoryNews = 'Society and Culture';
  } else {
    categoryNews = 'General News';
  }

  const strippedHTML = post.acf.references.replace(/(<([^>]+)>)/ig, '\n');
  const referenceArray = [];

  return (
    <View style={mainView}>
      <ScrollView>
        <View style={{ margin: 25 }}>
          <Text style={category}>{categoryNews}</Text>
          <View style={titleHeadingContainer}>
            <Text style={titleHeading}>{post.title.rendered}</Text>
          </View>
          <Text style={readingTime}>3 minute read</Text>
          {post.acf.blockquote === '' ? <View /> : <Text style={quote}>{post.acf.blockquote}</Text>}
          <Text style={mainContent}>{post.plaintext}</Text>
          <Text style={referenceTitle}>References</Text>
          <Text style={references}>{strippedHTML}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

SingleItem.propTypes = {
  post: React.PropTypes.objectOf(React.PropTypes.array),
};

SingleItem.defaultProps = {
  post: [],
};
