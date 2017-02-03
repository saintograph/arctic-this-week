import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwipeView extends Component {
  renderPost() {
    console.log(this.props.newsProps.post);
    return (
      this.props.newsProps.post.map((post) => {
        return (
          <View key={post.id} style={{ marginTop: 175 }}>
            <Text>{post.id}</Text>
          </View>
        );
      })
    );
  }

  render() {
    return (
      <Swiper
        index={this.props.newsProps.index}
        loop={false}
      >
        {this.renderPost()}
      </Swiper>
    );
  }
}

SwipeView.propTypes = {
  newsProps: React.PropTypes.objectOf(React.PropTypes.array),
};

SwipeView.defaultProps = {
  newsProps: [],
};
