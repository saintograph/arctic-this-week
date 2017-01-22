import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { loadAllNews } from '../actions/index';
import NewsList from '../components/news-list';
import HeroImage from '../components/hero-image';

class AllNews extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadAllNews();
  }

  render() {
    const imageURL = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';
    return (
      <ScrollView>
        <HeroImage imageURL={imageURL} />
        <NewsList />
      </ScrollView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadAllNews }, dispatch);
}

function mapStateToProps({ news }) {
  return { news };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllNews);
