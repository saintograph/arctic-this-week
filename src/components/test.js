import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


class Test extends Component {
  render() {
    return (
      <Text style={{marginTop: 54}}>Proof: {this.props.text}</Text>
    );
  }
}

export default Test;
