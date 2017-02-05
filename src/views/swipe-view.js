import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import SingleItem from './single-item';

export default class SwipeView extends Component {
  renderPost() {
    return (
      this.props.newsProps.post.map((post) => {
        return (
          <View key={post.id}>
            <SingleItem post={post} />
          </View>
        );
      })
    );
  }

  render() {
    const { index } = this.props.newsProps;
    return (
      <Swiper
        index={index}
        loop={false}
      >
        {this.renderPost()}
      </Swiper>
    );
  }
}

SwipeView.propTypes = {
  newsProps: React.PropTypes.objectOf(React.PropTypes.object),
};

SwipeView.defaultProps = {
  newsProps: {},
};
