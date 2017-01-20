import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f3f3f3',
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
  },
  referenceTitle: {
    fontSize: 16,
    fontFamily: 'knile-semibold',
    color: '#1c1c1e',
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

function SingleItem() {
  return (
    <ScrollView style={mainView}>
      <View style={{ margin: 25 }}>
        <Text style={category}>defense and security</Text>
        <View style={titleHeadingContainer}>
          <Text style={titleHeading}>15 Effective Ways to Combat Global Warming</Text>
        </View>
        <Text style={readingTime}>3 minute read</Text>
        <Text style={mainContent}>Find that perfect color with our color picker and discover
        beautiful color harmonies, tints, shades and tones; input Hex color codes, RGB and
        HSL values, and generate HTML, CSS and SCSS styles. </Text>
        <Text style={quote}>"Input Hex color codes, RGB and HSL values"</Text>
        <Text style={mainContent}>Find that perfect color with our color picker and discover
        beautiful color harmonies, tints, shades and tones; input Hex color codes, RGB and
        HSL values, and generate HTML, CSS and SCSS styles. </Text>
        <Text style={referenceTitle}>References</Text>
        <Text style={references}>http://example.com</Text>
        <Text style={references}>http://example.com</Text>
        <Text style={references}>http://example.com</Text>
        <Text style={references}>http://example.com</Text>
        <Text style={references}>http://example.com</Text>
      </View>
    </ScrollView>
  );
}

export default SingleItem;
