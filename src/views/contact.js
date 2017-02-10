import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f3f3f3',
    marginTop: 50,
    height,
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
    marginBottom: 5,
    fontSize: 16,
    fontFamily: 'calendas_plus',
    color: '#353535',
  },
});

const {
  mainView,
  titleHeadingContainer,
  titleHeading,
  mainContent,
  titleBrand,
} = styles;

class Contact extends Component {
  componentWillMount() {
    Actions.refresh({ key: 'drawer', open: value => !value });
  }
  render() {
    return (
      <ScrollView style={mainView}>
        <View style={{ margin: 25 }}>
          <View style={titleHeadingContainer}>
            <Text style={titleHeading}>Contact
            <Text style={titleBrand}> The Arctic Institute</Text>
            </Text>
          </View>
          <Text style={mainContent}>Center for Circumpolar Security Studies
          Washington, DC 20007</Text>
          <Text style={mainContent}>Phone: +1 (202) 350-1384</Text>
          <Text style={mainContent}>Email: info@thearcticinstitute.org</Text>
          <Text style={mainContent}>Media Enquiries: media@thearcticinstitute.org</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Contact;

