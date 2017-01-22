import React, { Component } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import MenuBar from './components/header';
// import HeroImage from './components/hero-image';
// import NewsList from './components/news-list';
// import SingleItem from './views/single-item';
// import About from './views/about';
// import Contact from './views/contact';
import AllNews from './views/all-news';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class MainApp extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View>
          <MenuBar />
          <Animatable.View animation="fadeIn">
            <AllNews />
          </Animatable.View>
        </View>
      </Provider>
    );
  }
}
