import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { loadAllNews } from '../actions/index';
import NewsListItem from '../components/news-list-item';
import HeroImage from '../components/hero-image';
// import Test from '../components/test';

class AllNews extends Component {

  componentDidMount() {
    this.props.loadAllNews();
  }

  renderNews() {
    return this.props.news.news.map((post) => {
      return (
        <TouchableOpacity key={post.id}>
          <NewsListItem post={post} />
        </TouchableOpacity>
      );
    });
  }

  render() {
    const imageURL = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';
    return (
      <View>
        <HeroImage imageURL={imageURL} />
        <ScrollView>
          {this.renderNews()}
        </ScrollView>
      </View>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ loadAllNews }, dispatch);
// }

function mapStateToProps(state) {
  return { news: state.news };
}

// export default connect(mapStateToProps, mapDispatchToProps)(AllNews);
export default connect(mapStateToProps, { loadAllNews })(AllNews);
