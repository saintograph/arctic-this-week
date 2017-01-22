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
import Contact from './views/contact';
import reducers from './reducers';


const imageURL = 'https://images.unsplash.com/photo-1478194409487-fa5c1eb18622?dpr=1&auto=format&fit=crop&w=1500&h=970&q=80&cs=tinysrgb&crop=';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class MainApp extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View>
          <MenuBar />
          <Animatable.View animation="fadeIn">
            {/*   <HeroImage imageURL={imageURL} />
              <NewsList /> */}
            <Contact />
          </Animatable.View>
        </View>
      </Provider>
    );
  }
}
