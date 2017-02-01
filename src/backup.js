import React, { Component } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import AllNews from './views/all-news';
import reducers from './reducers';

// let store = createStore(reducers, applyMiddleware(promise));
const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

export default class MainApp extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View>
          <Animatable.View animation="fadeIn">
            <AllNews />
          </Animatable.View>
        </View>
      </Provider>
    );
  }
}
