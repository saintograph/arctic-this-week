import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { loadAllNews } from '../actions/index';
import NewsListItem from '../components/news-list-item';
import HeroImage from '../components/hero-image';



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
        <TouchableOpacity key={post.id} >
          <Text onPress={swipeMe.bind(this, newsProps)}>{post.title.rendered}</Text>
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
          {this.renderNews()}
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
