import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { StackNavigator } from 'react-navigation';
import AppShell from './src/MainApp';
import reducers from './src/reducers';


const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);


export default class arctic_this_week extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <AppShell />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('arctic_this_week', () => arctic_this_week);
