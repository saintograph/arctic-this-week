import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
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
      return <NewsListItem key={post.id} post={post} />;
    });
  }

  render() {
    const imageURL = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';
    return (
      <ScrollView>
        <HeroImage imageURL={imageURL} />
        {this.renderNews()}
      </ScrollView>
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
