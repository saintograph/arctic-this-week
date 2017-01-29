import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { loadAllNews } from '../actions/index';
import NewsListItem from '../components/news-list-item';
import HeroImage from '../components/hero-image';


class AllNews extends Component {

  componentDidMount() {
    this.props.loadAllNews();
  }

  renderNews() {
    const { news } = this.props.news;
    const goToTest = () => Actions.test({text: "Test!"});
    return news.map((post) => {
      return (
        <List>
          <TouchableOpacity key={post.id} >
            <ListItem onPress={goToTest}><Text>Test</Text></ListItem>
          </TouchableOpacity>
        </List>
      );
    });
  }

  render() {
    const imageURL = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';
    return (
      <View style={{ marginTop: 54 }}>
        <HeroImage imageURL={imageURL} />
        <ScrollView>
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
