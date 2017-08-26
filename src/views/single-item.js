import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Linking, Image, TouchableOpacity } from 'react-native';
import Share, { ShareSheet, Button } from 'react-native-share';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f3f3f3',
    paddingTop: 50,
    paddingBottom: 50,
    height,
  },
  category: {
    fontFamily: 'calendas_plus',
    color: '#99180d',
    fontSize: 14,
    marginBottom: 12,
  },
  titleHeadingContainer: {
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleHeading: {
    fontSize: 36,
    fontFamily: 'knile-semibold',
    color: '#1c1c1e',
  },
  mainContent: {
    marginTop: 25,
    marginBottom: 35,
    fontSize: 16,
    fontFamily: 'calendas_plus',
    color: '#353535',
  },
  quote: {
    fontSize: 24,
    fontFamily: 'knile-semibold',
    color: '#1c1c1e',
    paddingTop: 15,
  },
  referenceTitle: {
    fontSize: 21,
    fontFamily: 'knile-semibold',
    color: '#1c1c1e',
    marginTop: 5,
  },
  references: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'calendas_plus',
    color: '#99180d',
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
  sharingButtonText: {
    fontFamily: 'calendas_plus',
    fontSize: 16,
  },
  sharingIcon: {
    height: 30,
    width: 30,
  },
  sharingIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  shareSheetStyles: {
    marginBottom: 10,
  },
});

const {
  mainView,
  category,
  titleHeadingContainer,
  titleHeading,
  mainContent,
  quote,
  referenceTitle,
  references,
  sharingButtonText,
  shareSheetStyles,
  sharingIcon,
} = styles;

class SingleItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onCancel() {
    this.setState({ visible: false });
  }

  onOpen() {
    this.setState({ visible: true });
  }

  categoryNumber() {
    let categoryNews;
    switch (this.props.post.categories[0]) {
      case 3:
        categoryNews = 'Defense and Security';
        break;
      case 4:
        categoryNews = 'Climate and Environment';
        break;
      case 5:
        categoryNews = 'Indigenous Rights and Issues';
        break;
      case 6:
        categoryNews = 'Law and Governance';
        break;
      case 7:
        categoryNews = 'Natural Resources and Energy';
        break;
      case 8:
        categoryNews = 'Politics and Strategy';
        break;
      case 9:
        categoryNews = 'Shipping and Economics';
        break;
      case 10:
        categoryNews = 'Society and Culture';
        break;
      default:
        categoryNews = 'General News';
    }
    return categoryNews;
  }

  printReferences() {
    const noTags = this.props.post.acf.references.replace(/(<([^>]+)>)/ig, '').replace(/http/g, ',http').replace(/\s/g, '').split(',');
    const shiftTag = noTags.shift();
    return noTags.map((item) => {
      return (
        <Text
          style={references}
          key={item}
          onPress={() => { Linking.openURL(item); }}
        >
          {item}
        </Text>
      );
    });
  }

  render() {
    let shareOptions = {
      title: this.props.post.title.rendered,
      message: this.props.post.acf.excerpt,
      url: this.props.post.acf.shortened_url,
    };
    return (
      <View style={mainView}>
        <ScrollView>
          <View style={{ margin: 25 }}>
            <Text style={category}>{this.categoryNumber()}</Text>
            <View style={titleHeadingContainer}>
              <Text style={titleHeading}>{this.props.post.title.rendered}</Text>
            </View>
            {this.props.post.acf.blockquote === '' ? <View /> : <Text style={quote}>{this.props.post.acf.blockquote}</Text>}
            <Text style={mainContent}>{this.props.post.plaintext}</Text>
            <Text style={referenceTitle}>References</Text>
            {this.printReferences()}
            <TouchableOpacity onPress={this.onOpen.bind(this)}>
              <View style={styles.sharingIconContainer}>
                <Image
                  source={require('../images/share.png')}
                  style={sharingIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
          <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)} style={shareSheetStyles}>
            <Button
              iconSrc={require('../images/twitter.png')}
              onPress={() => {
                this.onCancel();
                setTimeout(() => {
                  Share.shareSingle(Object.assign(shareOptions, {
                    social: 'twitter',
                  }));
                }, 300);
              }}
            ><Text style={sharingButtonText}>Twitter</Text></Button>
            <Button
              iconSrc={require('../images/facebook.png')}
              onPress={() => {
                this.onCancel();
                setTimeout(() => {
                  Share.shareSingle(Object.assign(shareOptions, {
                    social: 'facebook',
                  }));
                }, 300);
              }}
            ><Text style={sharingButtonText}>Facebook</Text></Button>
          </ShareSheet>
        </ScrollView>
      </View>
    );
  }
}


SingleItem.propTypes = {
  post: React.PropTypes.objectOf(React.PropTypes.array),
};

SingleItem.defaultProps = {
  post: [],
};

export default SingleItem;
