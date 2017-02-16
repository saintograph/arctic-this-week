import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TimeAgo from 'react-native-timeago';
import * as Animatable from 'react-native-animatable';
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
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      refreshing: false,
    };
  }

  async componentDidMount() {
    await this.props.loadAllNews();
    await this.fetchHero();
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

  fetchHero() {
    const _this = this;
    const imageWPAPI = 'http://app.thearcticinstitute.org/wp-json/wp/v2/media?per_page=1&orderby=date';
    fetch(imageWPAPI)
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        _this.setState({
          image: data[0].guid.rendered,
        });
      });
  }

  async _onRefresh() {
    this.setState({
      refreshing: true,
    });
    await this.props.loadAllNews();
    this.setState({
      refreshing: false,
    });
  }

  render() {
    return (
      <View style={{ marginTop: 54 }}>
        {this.state.image === '' ? <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#7b7c7f" /> :
        <Animatable.View animation="fadeIn">
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing} 
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            <HeroImage imageURL={this.state.image} />
            <View style={{ marginTop: 20, marginBottom: -25 }}>
              {this.renderNews()}
            </View>
          </ScrollView>
        </Animatable.View>
        }
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
