import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f3f3f3',
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
  titleBrand: {
    color: '#6db8d8',
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
});

const {
  mainView,
  titleHeadingContainer,
  titleHeading,
  mainContent,
  quote,
  titleBrand,
} = styles;

function About() {
  return (
    <ScrollView style={mainView}>
      <View style={{ margin: 25 }}>
        <View style={titleHeadingContainer}>
          <Text style={titleHeading}>About
          <Text style={titleBrand}> The Arctic Institute</Text>
          </Text>
        </View>
        <Text style={mainContent}>Established in 2011, The Arctic Institute is an independent,
        nonprofit 501(c)3 tax-exempt organization headquartered in Washington, D.C
         with a network of researchers across the world.</Text>
        <Text style={quote}>"We envision a world in which the diverse and complex issues facing
         Arctic security are identified, understood,
         and innovatively resolved."</Text>
        <Text style={mainContent}>Rigorous, qualitative, and comprehensive research is
         the Institute’score for developing
        solutions to challenges and injustices in the circumpolar north.</Text>
      </View>
    </ScrollView>
  );
}

export default About;
