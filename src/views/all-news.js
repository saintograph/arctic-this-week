import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TimeAgo from 'react-native-timeago';
import { loadAllNews } from '../actions/index';
import HeroImage from '../components/hero-image';

const styles = StyleSheet.create({
  newsBlock: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F3F3F3',
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 20,
  },
  newsTitle: {
    fontFamily: 'knile-semibolditalic',
    color: '#000000',
    fontSize: 16,
    marginBottom: 2,
  },
  metaData: {
    fontFamily: 'calendas_plus_italic',
    fontSize: 10,
    marginBottom: 5,
  },
  newsExcerpt: {
    fontFamily: 'calendas_plus',
    fontSize: 14,
  },
});

const { newsTitle, newsBlock, metaData, newsExcerpt } = styles;

class AllNews extends Component {

  async componentDidMount() {
    await this.props.loadAllNews();
  }

  renderNews() {
    const { news } = this.props.news;
    const swipeMe = newsProps => Actions.swipeView({ newsProps });
    return news.map((post, index) => {
      const newsProps = {
        index,
        post: news,
      };
      return (
        <TouchableOpacity key={post.id} onPress={swipeMe.bind(this, newsProps)}>
          <View style={newsBlock}>
            <Text
              style={newsTitle}
            >
              {post.title.rendered}
            </Text>
            <Text style={metaData}><TimeAgo time={post.date} /> | {post.acf.author}</Text>
            <Text style={newsExcerpt}>{post.acf.excerpt}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const imageURL = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';
    return (
      <View style={{ marginTop: 54 }}>
        <ScrollView>
          <HeroImage imageURL={imageURL} />
          <View style={{ marginTop: 20, marginBottom: -25 }}>
            {this.renderNews()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

AllNews.propTypes = {
  news: React.PropTypes.objectOf(React.PropTypes.array),
};

AllNews.defaultProps = {
  news: [],
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ loadAllNews }, dispatch);
// }

function mapStateToProps(state) {
  return { news: state.news };
}


// export default connect(mapStateToProps, mapDispatchToProps)(AllNews);
export default connect(mapStateToProps, { loadAllNews })(AllNews);
